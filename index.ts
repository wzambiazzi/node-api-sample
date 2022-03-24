import app from './App';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.set('port', process.env.PORT || 3116);

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

app.listen(app.get('port'), () => {
  console.log(`START APLICATION - PORT: ${app.get('port')}`);
});
