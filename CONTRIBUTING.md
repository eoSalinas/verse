## Guia de contribuição

O **Verse** é o lugar ideal para quem busca fazer sua primeira contribuição em um projeto open source ou para aqueles que já contribuem em outros projetos e se identificam com nosso propósito. **Seja bem-vindo!**

Antes de começar a contribuir, gostaria de fornecer uma visão geral de como trabalhamos por aqui.

### Issues
Usamos as issues para relatar bugs, sugerir novas funcionalidades, compartilhar ideias e discutir melhorias. Se você tiver algo em mente, fique à vontade para criar uma issue no repositório. Ao abrir uma issue, explicite sua sugestão para que possamos discutir melhor.

Não se esqueça de verificar se alguém já abriu uma issue com uma ideia semelhante. Se sim, por que não tentam trabalhar juntos?
### Commits
Entendemos que commits uniformes trazem benefícios para nosso histórico e controle de versão, como melhor rastreabilidade e organização. Por isso, adotamos o **Conventional Commits** como padrão para este projeto. Se você não está familiarizado com ele, não se preocupe, é bem simples.

Indo direto ao ponto, um commit deve seguir o padrão `<tipo do commit>: mensagem do commit`. Veja um exemplo:

`docs: add contributing guide`

O tipo de commit indica a natureza da alteração (por exemplo, `docs` para documentação), enquanto a mensagem descreve especificamente o que o commit faz.

Para mais detalhes e conhecer outros tipos, consulte o site oficial do [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Pull Request (PR)
Sempre faça um Pull Request para a branch `develop`. Esta branch reflete a versão em desenvolvimento do projeto, enquanto a `main` está em produção. Ao enviar suas modificações para `develop` primeiro, podemos garantir que tudo funcione conforme o esperado - ou pelo menos tentar 😅, antes de ir para produção. Recomendamos fazer commits menores para facilitar o rastreamento do progresso. Não se preocupe, caso necessário faremos um "squash" antes de fazer o merge para não sobrecarregar o histórico.

Embora tenhamos sugerido enviar para `develop`, se estiver trabalhando em uma branch de feature ou similar, também pode enviar diretamente para essa branch.
