"use client";
import React from 'react'
import MarkdownEditor from '../ui/markDownEditor';

const EditAndAddPage = ({type} : {type: string}) => {
  const [markdown , setMarkdown] = React.useState<string>("");

  function handleMarkdown(val: string){
    setMarkdown(val);
  };
  
  
  return (
    <div className='w-full flex flex-col gap-4 justify-start items-start py-5'>
      <p>Type of editor is {type}</p>
      <div
      dangerouslySetInnerHTML={{__html: markdown}}
      />
      <MarkdownEditor markdown={markdown} setMarkdown={handleMarkdown} />
    </div>
  )
}

export default EditAndAddPage