function doPost(e) {
    try {
      var sheet = SpreadsheetApp.openById('').getSheetByName('Sheet1');
      var data = JSON.parse(e.postData.contents);
      sheet.appendRow([data.name, data.service, data.date, data.time]);
      return ContentService.createTextOutput('Success');
    } catch (error) {
      return ContentService.createTextOutput('Error: ' + error.message);
    }
  }
  