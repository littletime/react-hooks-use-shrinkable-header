# react-hooks-use-shrinkable-header
Your shrinkable header state in one hook

# Window listeners managed for you

This hook listens to the window scroll event and sets your state accordingly.

# Installation

```
npm i --save react-hooks-use-shrinkable-header
```

# Usage

```
import React from 'react'
import useShrinkableHeader from 'react-hooks-use-shrinkable-header'

const Header = () => {
  // If you want to set your own scroll threshold for shrinking the header,
  // you can pass it to the hook as a param
  const shrinked = useShrinkableHeader()
  
  return (
    <div className={shrinked ? 'shrinked' : ''}>
      My header
    </div>
  )
}
```
