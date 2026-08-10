const FormData = require('form-data');
const fs = require('fs');
const https = require('https');

// Create form data with all required fields
const form = new FormData();

// Required fields
form.append('fullName', 'Test Applicant');
form.append('email', 'test@example.com');
form.append('phone', '+1234567890');
form.append('linkedin', 'https://linkedin.com/in/testapplicant');
form.append('continent', 'Africa');
form.append('country', 'Nigeria');
form.append('situation', 'Student');
form.append('university', 'Test University');
form.append('major', 'Computer Science');
form.append('why', 'I am passionate about AI and want to contribute to meaningful projects.');
form.append('fulltime', 'Yes');
form.append('timezone', 'UTC+1');

// Optional fields
form.append('gradMonth', 'June');
form.append('gradYear', '2025');
form.append('languages', 'English');
form.append('languages', 'French');
form.append('projects', 'Built a chatbot using NLP');
form.append('apis', 'OpenAI, Google Cloud');
form.append('aiml', 'Yes');
form.append('aiInterests', 'Natural Language Processing');
form.append('aiInterests', 'Computer Vision');
form.append('career', 'AI Engineer');
form.append('learn', 'Machine learning, deep learning');
form.append('conflicts', 'None');
form.append('proud', 'Published a research paper');
form.append('stuck', 'Debugging complex models');
form.append('collab', 'Team projects, open source');
form.append('anythingElse', 'Excited to join!');

// Add a sample photo (create a simple test image if needed)
const testImagePath = '/tmp/test-photo.jpg';
if (!fs.existsSync(testImagePath)) {
  // Create a minimal valid JPEG for testing
  const minimalJpeg = Buffer.from([
    0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46, 0x00, 0x01,
    0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0xff, 0xdb, 0x00, 0x43,
    0x00, 0x03, 0x02, 0x02, 0x03, 0x02, 0x02, 0x03, 0x03, 0x03, 0x03, 0x04,
    0x03, 0x03, 0x04, 0x05, 0x08, 0x05, 0x05, 0x04, 0x04, 0x05, 0x0a, 0x07,
    0x07, 0x06, 0x08, 0x0c, 0x0a, 0x0c, 0x0c, 0x0b, 0x0a, 0x0b, 0x0b, 0x0d,
    0x0e, 0x12, 0x10, 0x0d, 0x0e, 0x11, 0x0e, 0x0b, 0x0b, 0x10, 0x16, 0x10,
    0x11, 0x13, 0x14, 0x15, 0x15, 0x15, 0x0c, 0x0f, 0x17, 0x18, 0x16, 0x14,
    0x18, 0x12, 0x14, 0x15, 0x14, 0xff, 0xc0, 0x00, 0x0b, 0x08, 0x00, 0x01,
    0x00, 0x01, 0x01, 0x01, 0x11, 0x00, 0xff, 0xc4, 0x00, 0x14, 0x00, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xc4, 0x00, 0x14, 0x10, 0x01, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0xff, 0xda, 0x00, 0x08, 0x01, 0x01, 0x00, 0x00,
    0x3f, 0x00, 0xd2, 0xcf, 0x20, 0xff, 0xd9
  ]);
  fs.writeFileSync(testImagePath, minimalJpeg);
}

form.append('photo', fs.createReadStream(testImagePath), {
  filename: 'test-photo.jpg',
  contentType: 'image/jpeg'
});

const options = {
  hostname: 'fellowship.learnrithm.com',
  port: 443,
  path: '/api/fellowship',
  method: 'POST',
  headers: form.getHeaders()
};

console.log('Sending POST request to https://fellowship.learnrithm.com/api/fellowship...');

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers, null, 2)}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response:', data);
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

form.pipe(req);

req.on('finish', () => {
  console.log('Request sent');
});
