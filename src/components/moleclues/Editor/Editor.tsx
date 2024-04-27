import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { StyledEditorLayout, StyledEditorTitleBox, StyledEditorTitle } from '@/styles/components/Editor/Editor';
import FormButton from '../FormButton/FormButton';
import EditorInputContainer from '../Editor/EditorInputContainer';
import NormalCheckBox from '../NormalCheckBox/NormalCheckBox';
import QnACheckBox from '../QnACheckBox/QnACheckBox';

type EditorProps = {
  title: string;
  label?: string;
  formText: string;
  padding?: string;
  fontSize?: string;
  color?: string;
  text: string;
  to: string;
  fontWeight?: string;
};

function Editor({ title = '문의글 작성하기', label, formText, text, to, padding, fontSize, fontWeight }: EditorProps) {
  const inputProps = {
    writer: '작성자',
    title: '제목',
  };

  return (
    <StyledEditorLayout>
      <StyledEditorTitleBox>{title}</StyledEditorTitleBox>
      <EditorInputContainer label={inputProps.writer} />
      <EditorInputContainer label={inputProps.title} />
      <div>
        <StyledEditorTitle>내용</StyledEditorTitle>
        <div className="custom-ckeditor">
          <CKEditor
            editor={ClassicEditor}
            data="<p>공지사항 내용을 작성해주세요.</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it Xis needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event) => {
              console.log(event);
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
          <style>{`
        .custom-ckeditor .ck-editor__editable {
          min-height: 30rem;
          font-size:20px;
        }
      `}</style>
        </div>
      </div>
      {label === '비공개' ? (
        <QnACheckBox label={label} />
      ) : label === '중요공지' ? (
        <NormalCheckBox label={label} />
      ) : null}
      <FormButton
        formText={formText} // '제출하기' 텍스트 props , 하지만 다른 페이지에서는 다른 제목으로 사용 가능합니다. to 진성, 경화
        text={text} // '돌아가기' 텍스트 props
        to={to}
        padding={padding}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </StyledEditorLayout>
  );
}

export default Editor;
