with open('script.js', 'r') as f:
    content = f.read()

# Fix double observe and ensure correct setup
content = content.replace("observer.observe(el);\n        \n        // Add staggered delays", "// Add staggered delays")

with open('script.js', 'w') as f:
    f.write(content)
