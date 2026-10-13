import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const url = '';

  // 1. Teste simulando a falha (sem o token no header)
  let resSemToken = http.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  check(resSemToken, {
    'Confirmação de erro: retorna 401 sem token': (r) => r.status === 401,
  });

  // 2. Teste com o token válido (quando copiado dos Request Headers do navegador)
  const tokenValido = '';
  
  let resComToken = http.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenValido}`,
    },
  });

  check(resComToken, {
    'Sucesso: retorna 200 com token válido': (r) => r.status === 200,
  });

  sleep(1);
}
