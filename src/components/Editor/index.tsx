import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const formats = ['link', 'image']

const modules = {
  toolbar: [['link', 'image'], ['clean']],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

export default function Editor() {
  return <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />
}
