# Registro Escolar v1 — Render

Este repositório usa um wrapper de implantação para executar o projeto Next.js armazenado em `app.tar.gz`.

O arquivo compactado não contém `node_modules`, `.next`, `.env` ou credenciais. O Render extrai o projeto durante o build, instala as dependências, executa o build, aplica as migrations e inicia o servidor.
