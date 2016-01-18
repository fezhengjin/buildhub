import spider from './spider';

spider.fetchBuildData('http://10.0.101.17')
.then(json => {console.log(json)});
