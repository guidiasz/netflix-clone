import { ReactComponent as ErrorIcon } from '../images/icons/error.svg';

export function formHelperContent(status, message) {
  if (status === 'invalid') {
    return (
      <>
        <ErrorIcon />
        {message}
      </>
    );
  }
  if (status === 'valid') {
    return message;
  }
}
export function fieldHelperContent(status, message) {
  return status === 'invalid' ? (
    <>
      <ErrorIcon />
      {message}
    </>
  ) : null;
}
export function validateEmail(value) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value) return 'O email é obrigatório';
  if (!regex.test(value)) return 'Informe um email válido.';

  return null;
}
export function validatePassword(value) {
  const regex = /^.{4,60}$/;
  if (!value) return 'A senha é obrigatória';
  if (!regex.test(value)) return 'A senha deve ter entre 4 e 60 caracteres.';

  return null;
}

export function validateUsername(value) {
  const regex = /^[A-Za-z_]{4,60}$/;
  if (!value) return 'O nome de usuário é obrigatório.';
  if (!regex.test(value)) return 'O nome de usuário é inválido.';

  return null;
}
