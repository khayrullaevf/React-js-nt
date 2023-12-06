import React from 'react'

export const ComponentB = () => {
    console.log('ComponentB re-render');
  return (
    <div>ComponentB</div>
  )
}

export const MemoizedComponentB=React.memo(ComponentB)