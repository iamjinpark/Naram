import useInputValidation from '@/hook/useInputValidation';
import { StyledPasswordInputWrapper, StyledValidationText } from '@/styles/components/Editor/Editor';
import React from 'react';

const PasswordInput: React.FC = () => {
  const reg: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9\s]).{6}$/; // 필요한 정규식으로 수정하세요
  const inputProps = useInputValidation('', reg);

  return (
    <StyledPasswordInputWrapper>
      <input
        type="text"
        value={inputProps.value}
        onChange={inputProps.onChange}
        className={inputProps.isValid ? '' : 'is--invalid'}
      />
      {!inputProps.isValid && (
        <StyledValidationText className="error-message">비밀번호를 입력해주세요(6자리숫자)</StyledValidationText>
      )}
    </StyledPasswordInputWrapper>
  );
};

export default PasswordInput;
