"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = validateIssue;
var validIssueStatus = {
  New: true,
  Open: true,
  Assigned: true,
  Fixed: true,
  Verified: true,
  Closed: true
};
var issueFieldType = {
  id: 'optional',
  status: 'required',
  owner: 'required',
  effort: 'optional',
  created: 'required',
  completionDate: 'optional',
  title: 'required'
};
function validateIssue(issue) {
  for (var field in issueFieldType) {
    var type = issueFieldType[field];
    if (!type) {
      delete issue[field];
    } else if (type === 'required' && !issue[field]) {
      return "".concat(field, " is required.");
    }
  }
  if (!validIssueStatus[issue.status]) {
    return "".concat(issue.status, " is not a valid status.");
  }
  return null;
}

// export default {
//   validateIssue,
// };
//# sourceMappingURL=issue.js.map