var ifrm = document.createElement('iframe');
ifrm.setAttribute('id', 'ifrm'); // assign an id

document.body.appendChild(ifrm); // to place at end of document

// assign url
ifrm.setAttribute('src', 'https://apps-staging.transfix.io/#/graphiql');