const ETOS = artifacts.require('ETOS');
//const RSH = artifacts.require('RSH');


//TODO change
module.exports = function(deployer) {
    //deployer.deploy(owner);
    deployer.deploy(ETOS);
    //deployer.deploy(RSH);
    //deployer.deploy(Farmer, _YFS, "0x01B49cFa1B72303903f986Ea470b7f26308d28c0", 1000, 620, 700);//_YFS 를 알아야 함
    //deployer.deploy(YFSToken);
    /*deployer.deploy(YFSFarm, '0x0655707d58c1D40B8cc8e3FF6379A3c4B961ADe0'); //0xEEa57FF3Bfb9ADb4330D2494d60bbF8B8317166E
    deployer.deploy(YFSMaker, '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', '0xC99572980806c86f8D353D2d36b2F4419fC312E6', '0x0655707d58c1D40B8cc8e3FF6379A3c4B961ADe0',
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'); //0x582f4f12b67eA315aa2fF333e854de5A1c9F53f5
*/
    //deployer.deploy(YFSFarm, YFSToken.address);

    // deployer.deploy(Farmer, 0x0655707d58c1d40b8cc8e3ff6379a3c4b961ade0, '0x01B49cFa1B72303903f986Ea470b7f26308d28c0', 1000, 900900, 12441166);


    //     .then(function (){
    //     deployer.deploy(YFSMaker, '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', Farmer.address, YFSToken.address,
    //         '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
    // });
    /*
    deployer.deploy(YFSToken).then(function (){
        deployer.deploy(Farmer, YFSToken.address, '0x01B49cFa1B72303903f986Ea470b7f26308d28c0', 1000, 900900, 12441166);
    });
    */

    /*deployer.deploy(Timelock, '0x4B89E2108da9EA9b90d6628C256C7A7f463a9568', 172800);
    deployer.deploy(YFSToken).then(function (){
        deployer.deploy(YFSFarm, YFSToken.address);
        deployer.deploy(Farmer, YFSToken.address, '0x4B89E2108da9EA9b90d6628C256C7A7f463a9568', 1000, 0, 12441166).then(function (){
            deployer.deploy(YFSMaker, '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', Farmer.address, YFSToken.address,
                '0xc778417e063141139fce010982780140aa0cd5ab');
        });
    });*/

    //deployer.deploy(Address);
    //deployer.deploy(YFSFarm, '0xB34Bdf7462438263C63335Fd44492f76D60dBb87');
    /*deployer.deploy(Farmer, '0x4579b2BCb62dFaE9760b74CF861ef6d183314256', '0x4B89E2108da9EA9b90d6628C256C7A7f463a9568', 1000, 100, 500000).then(function (){
        deployer.deploy(YFSMaker, '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', Farmer.address, '0x7B3940a868b91299bdd87Bc9B29D74479959F5C0',
            '0xc778417e063141139fce010982780140aa0cd5ab');
    });*/
    //deployer.deploy(MockERC20, 'LPToken', 'LP', '10000000000');
    //deployer.deploy(ASTToken);
    // 6,500 per one day 180일 함

    //deployer.deploy(Timelock, '0x43c8A8b81B4aB49B0363962dFB8145ba7162832b', 172800);
    //deployer.deploy(Timelock, '0xa42e66ce040ac0feb4340c885427eb1db6e2cce6', 172800);
    //deployer.deploy(ASTFarm, '0x9Ba5774715Db9E3747C10C3Efde3C43a95b99479');
    //deployer.deploy(YFSFarm, '0xc961ce56497240d7f6FBD82Cf32AC1f59414d64C');
    //deployer.deploy(Gov, '0xF74c0C5A68F3988b3bE8bbCFDD16343fff9F71a4', '0x9Ba5774715Db9E3747C10C3Efde3C43a95b99479', '0x43c8A8b81B4aB49B0363962dFB8145ba7162832b');
    //deployer.deploy(Gov, '0x81Fd17cC55F97418C8d58710950Dc2B4CC63345F', '0x57Cd11851288c84aE76f4417384Ffe0be85Ae69c', '0xa42e66ce040ac0feb4340c885427eb1db6e2cce6');
    //하루 6500
    //deployer.deploy(MoneyMaker, '0x9Ba5774715Db9E3747C10C3Efde3C43a95b99479', '0x43c8A8b81B4aB49B0363962dFB8145ba7162832b',
    //    '50000000000000000000', 11460758, 12045758);
    //deployer.deploy(Farmer, '0x0969c152aC6D86b62d448D34Fb051E798Ef6449d', '0xA42E66cE040ac0fEb4340C885427eb1DB6e2CCE6',
    //    1000, 0, 69500);
    //deployer.deploy(ASTMaker, '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', '0xbB67cF157beE9c5208CC9E6A18480e647E25EEaB',
    //    '0x9Ba5774715Db9E3747C10C3Efde3C43a95b99479', '0xc778417e063141139fce010982780140aa0cd5ab');
    //deployer.deploy(ASTMaker, '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', '0xbB67cF157beE9c5208CC9E6A18480e647E25EEaB',
    //    '0x9Ba5774715Db9E3747C10C3Efde3C43a95b99479', '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2');
};

