const _0x17b5 = ['crypto','from','prompt-sync','encryptedData','aes-256-cbc','createDecipheriv','34373739353536393466333032363639','salt','9b43c77e2e89c6f89d431a7a32e929369cd13ed035267af1cd5f24117abcc2d6a01c0ca8f428c154c27de67c4f8b3851699f46a7a05d49e2cbc397511e09ab4d1b5ed4de6a73deefa56d88001bb5a68903579a21e664d02976b1e9ae88347aaec3540ca282bd534ffb603a95f9e0a5eda5fcb0ec789b550c84efc552c5547743983061b99a90a463a1d39fccadfa263c','final','update','hex','concat','toString','477955694f302669'];

(function(_0x2089c8,_0x17b5e0){
  const _0x1280f7 = function(_0x3ed2f6){
    while(--_0x3ed2f6){
      _0x2089c8['push'](_0x2089c8['shift']());
    }
  };
  _0x1280f7(++_0x17b5e0);
}(_0x17b5,0xec)); // 0xec === 236

const _0x1280 = function(_0x2089c8,_0x17b5e0){
  _0x2089c8 = _0x2089c8-0x0; // 0x0 === 0
  let _0x1280f7 = _0x17b5[_0x2089c8];
  return _0x1280f7;
};

const crypto=require(_0x1280('0x4'));

const algorithm=_0x1280('0x8');

const prompt=require(_0x1280('0x6'))({'sigint':!![]});

const password=prompt('password\x20:\x20');

const key=crypto['scryptSync'](password,_0x1280('0xb'),0x20);

const iv=Buffer[_0x1280('0x5')](_0x1280('0x3'));

function decrypt(_0x3a0f7e){let _0xfee2d5=Buffer[_0x1280('0x5')](_0x3a0f7e['iv'],_0x1280('0x0'));let _0x4767a8=Buffer['from'](_0x3a0f7e[_0x1280('0x7')],'hex');let _0x59a961=crypto[_0x1280('0x9')](algorithm,key,_0xfee2d5);let _0x5129f7=_0x59a961[_0x1280('0xe')](_0x4767a8);_0x5129f7=Buffer[_0x1280('0x1')]([_0x5129f7,_0x59a961[_0x1280('0xd')]()]);return _0x5129f7[_0x1280('0x2')]();}

try {
  console['log'](decrypt({'iv':_0x1280('0xa'),'encryptedData':_0x1280('0xc')}))
} catch (e) {
  console.log(e)
  console['log']('Wrong password, sorry mate !')
};
