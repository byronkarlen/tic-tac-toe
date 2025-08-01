const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 512x512 canvas
const canvas = createCanvas(512, 512);
const ctx = canvas.getContext('2d');

// Fill with dark blue background
ctx.fillStyle = '#1a1a2e';
ctx.fillRect(0, 0, 512, 512);

// Set text properties
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 48px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Add text shadow
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 4;

// Draw the text
ctx.fillText('Tic Tac Toe', 256, 256);

// Convert to PNG buffer
const buffer = canvas.toBuffer('image/png');

// Write to file
fs.writeFileSync('splash-icon.png', buffer);
console.log('Splash icon created: splash-icon.png'); 