let toc = `#${answers.github}  
## Description

${answers.description}

## Table of Contents

*[Installation]

*[Usage]

*[License](${answers.License})

*[Contributing]()

*




`
console.log(toc)
fs.writeFile("output.md", toc, _=>console.log('we wrote it'))    
console.log(answers)

#${answers.github} 
      
      ## Description

      ${answers.description}
      
      ## Table of Contents
      
      *[Installation]
      
      *[Usage]
      
      *[License](#${answers.License})
      
      *[Contributing](#${answers.Contributing})
      
      *[Test](#${answers.Tests})

      *[Questions]()
      
      
      
      
      `
      console.log(toc)
      fs.writeFile("output.md", toc, _=>console.log('we wrote it'))    
      // n