import React, { Component, useCallback, useRef } from 'react'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import 'ckeditor5-custom-build/build/ckeditor'

// import ClassicEditor from './ImageUpload'
// import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
// import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting';
// import ImageResizeHandles from '@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles';

import { Button } from '@shopify/polaris'
import TextInput from './common/TextInput'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import parse from 'html-react-parser'
import { Endpoint } from '../util'

const EmailAutomation = () => {
  const editorRef = useRef(null)

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }

  const API_URl = Endpoint
  const UPLOAD_ENDPOINT = 'upload'

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData()
          loader.file.then(async (file) => {
            body.append('uploadImg', file)
            console.log(...body, 'img')
            // for (var key of body.entries()) {
            //   console.log(key[0] + ', ' + key[1])
            // }
            await fetch(`${API_URl}/${UPLOAD_ENDPOINT}`, {
              method: 'post',
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({ default: `${API_URl}/${res.url}` })
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          })
        })
      },
    }
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader)
    }
  }
  const [data, setData] = useState('')
  const [wordCount, setWordCount] = useState({ Word: 0, Char: 0 })

  const handelEditorChange = useCallback(
    (event, editor) => {
      setData(parse(editor.getData()))
      console.log(editor.plugins.get('WordCount').words)
      setWordCount({
        Word: editor.plugins.get('WordCount').words,
        Char: editor.plugins.get('WordCount').characters,
      })

      // console.log(editor.getData())
    },
    [data, wordCount],
  )

  return (
    <div className="container">
      <div className="editor-wrapper">
        <div className="backArrow">
          <div className="backarrow-icon">
            <NavLink to="/automation">
              <i className="fa-solid fa-arrow-left"></i>
            </NavLink>
          </div>
          <div className="title">
            <h3>Back In Stock Email</h3>
          </div>
        </div>
        <div className="editor">
          <div className="top-buttons">
            <div className="preview-button">
              <Button primary>Preview</Button>
            </div>
            <div className="send-button">
              <Button primary>Send Test Email</Button>
            </div>
          </div>
          <div className="Editor-App">
            <div className="subject-input">
              <TextInput
                label={'Subject'}
                placeholder={'{{product_name}} is now available'}
              />
            </div>

            <CKEditor
              className="editors"
              editor={ClassicEditor}
              config={{
                // ckfinder:{uploadUrl: "https://6322-125-99-173-2.ngrok.io/upload"},
                extraPlugins: [uploadPlugin],
              }}
              data="<p>Hello World!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!')
                editor.editing.view.change((writer) => {
                  // writer.setStyle(
                  //     "height",
                  //     "200px",
                  //     editor.editing.view.document.getRoot()
                  // );
                })
                setWordCount({
                  Word: editor.plugins.get('WordCount').words,
                  Char: editor.plugins.get('WordCount').characters,
                })
              }}
              onChange={(event, editor) => handelEditorChange(event, editor)}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
          <div id="word-count">
            <span>
              <strong>Words:</strong> {JSON.stringify(wordCount.Word)}{' '}
            </span>
            <span>
              <strong>Characters:</strong> {JSON.stringify(wordCount.Char)}
            </span>
          </div>
          <Button primary>Save</Button>
          {/* {data} */}
        </div>
      </div>
    </div>
  )
}

export default EmailAutomation
