# Step 1: Create a ZIP archive from the current Git repository, excluding ignored files.
git archive --format=zip --output=./kirby-copilot-$(git describe --tags).zip HEAD

# Step 2: Add the `index.js` file to the ZIP archive.
zip -g ./kirby-copilot-$(git describe --tags).zip index.js index.css
