// const express = require("express")
// const bodyParser = require('body-parser');
// const { validateIssue } = require('./issue')
const __dirname = path.resolve();

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { MongoClient, ObjectId } from 'mongodb';
import Issue from './issue.js';
import SourceMapSupport from 'source-map-support';

SourceMapSupport.install();
const app = express();
// app.use(express.static('static'))
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//DATABASE 
// const { MongoClient } = require('mongodb');
const URI = 'mongodb://localhost:27017'
const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connect() {
  await client.connect();
  console.log('Connected to the database server')
  db = client.db('issuetracker');
  const collection = db.collection('issues');
  return 'done.'
}

// Connect to the database
connect()
  .then(() => {
    app.listen(3000, () => console.log('App started on port 3000'))
  })
  .catch(console.error)
// .finally(() => client.close())

// REST API ROUTEs
app.get('/api/issues', (req, res) => {
  const filter = {};
  if (req.query.status) filter.status = req.query.status;
  if (req.query.effort_lte || req.query.effort_gte) filter.effort = {};
  if (req.query.effort_lte) filter.effort.$lte = parseInt(req.query.effort_lte, 10);
  if (req.query.effort_gte) filter.effort.$gte = parseInt(req.query.effort_gte, 10);
  console.log(filter);
  db.collection('issues').find(filter).toArray().then(issues => {
    const metaData = { total_count: issues.length }
    res.json({ _metaData: metaData, records: issues })
  }).catch(error => {
    console.log(error)
    res.status(500).json({ message: `Internal server error: ${error}` })
  })
});

app.post('/api/issues', (req, res) => {
  const newIssue = req.body;
  newIssue.created = new Date();
  if (!newIssue.status)
    newIssue.status = "New";


  // THIS IS WHERE I AM CALLING THE ISSUE FUNCTION
  const err = Issue(newIssue)
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }
  db.collection('issues').insertOne(newIssue).then(result =>
    db.collection('issues').find({ _id: result.insertedId }).limit(1).next()
  ).then(newIssue => {
    res.json(newIssue)
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal server error: ${error}` })
  })
})

app.get('/api/issues/:id', (req, res) => {
  let issueId;
  try {
    issueId = new ObjectId(req.params.id);
  } catch (error) {
    res.status(422).json({ message: `Invalid issue ID format: ${error}` });
    return;
  }

  db.collection('issues').find({ _id: issueId }).limit(1)
    .next()
    .then(issue => {
      if (!issue) res.status(404).json({ message: `No such issue: ${issueId}` });
      else res.json(issue);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal server error: ${error}` });
    });
});

app.put('/api/issues/:id', (req, res) => {
  let issueId;
  try {
    issueId = new ObjectId(req.params.id)
    console.log(req.body, " => request body")
  } catch (error) {
    res.status(422).json({ message: `Invalid issue ID format: ${error}` });
    return;
  }

  const issueData = req.body;
  delete issueData._id;

  db.collection('issues')
    .updateOne({ _id: issueId }, { $set: issueData })
    .then(() => {
      // Return the updated issue to the client
      db.collection('issues')
        .findOne({ _id: issueId })
        .then(updatedIssue => {
          res.json(updatedIssue);
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({ message: `Internal Server Error: ${error}` });
        });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.delete('/api/issues/:id', (req, res) => {
  let issueId;
  try {
    issueId = new ObjectId(req.params.id);
  } catch (error) {
    res.status(422).json({ message: `Invalid issue ID format: ${error}` });
    return;
  }
  db.collection('issues')
  .deleteOne({ _id: issueId }).then((deleteResult) => {
    console.log('Delete result:', deleteResult);
    if (deleteResult.result && deleteResult.result.n === 1) res.json({ status: 'OK' });
    else res.json({ status: 'Warning: object not found' });
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve('static/index.html'))
})