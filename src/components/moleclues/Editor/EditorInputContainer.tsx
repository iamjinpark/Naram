import { StyledEditorInputWrapper, StyledEditorInputLabel, StyledEditorInput } from '@/styles/components/Editor/Editor';

type EditorInputProps = {
  label: string;
};

function EditorInputContainer({ label }: EditorInputProps) {
  const InputProps = {
    writer: 'id',
    title: 'title',
  };

  return (
    <StyledEditorInputWrapper>
      <StyledEditorInputLabel htmlFor={InputProps.writer}>{label}</StyledEditorInputLabel>
      <br />
      <StyledEditorInput id={InputProps.writer} name={InputProps.writer}></StyledEditorInput>
    </StyledEditorInputWrapper>
  );
}

export default EditorInputContainer;
