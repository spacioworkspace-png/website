# Google Sheets Integration Setup

To save lead capture form data to Google Sheets, follow these steps:

## Step 1: Create a Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
    
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();
    
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.source || '',
      data.timestamp || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 2: Create a Google Sheet

1. Create a new Google Sheet
2. Add headers in the first row: `Timestamp`, `Name`, `Email`, `Phone`, `Source`, `Submitted At`
3. Copy the Spreadsheet ID from the URL (the long string between `/d/` and `/edit`)
4. Replace `YOUR_SPREADSHEET_ID` in the script with your actual Spreadsheet ID

## Step 3: Deploy as Web App

1. In the Apps Script editor, click "Deploy" > "New deployment"
2. Click the gear icon next to "Select type" and choose "Web app"
3. Set:
   - Description: "Lead Capture API"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. Copy the Web App URL

## Step 4: Add to Environment Variables

Add the Web App URL to your `.env.local` file:

```
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Step 5: Test

The lead capture popup will automatically save data to Google Sheets when users submit the form.

## Note

If you don't set up Google Sheets, the form will still work by redirecting users to WhatsApp with their information.

