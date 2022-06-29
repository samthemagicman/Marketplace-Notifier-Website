'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "00f42101e82dd96329bedffe8a0438f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "717610b64580cbde23b7918751839d3e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "baebdd9b31a6e4e965d22968a7efb252",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ab9895634ddb171e88f53791eaf3e9bd",
".git/logs/refs/heads/development": "4a61fd9a13563012ad84d5eb23b4545d",
".git/logs/refs/heads/main": "1ec6f3e320c69b65a0fd371985aa220e",
".git/logs/refs/remotes/origin/development": "ab779459ade5727093e0dd16a8ca83c2",
".git/logs/refs/remotes/origin/main": "b492ebb2ce14c4ffae4858684821e2b4",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/04/2b6466193fb7d031ef56c1304cc3160cdf1784": "fc25c318c89a74e4af388e357775220d",
".git/objects/04/2cf7efdacead074b925c32f9a452817671de08": "9770784fa3b3e806261b2968ab2ba92d",
".git/objects/07/dd36bbf3eaff5a2ed3c02950089101cf6cbd8c": "41c91c439fae1f4446238ca61dbbe17f",
".git/objects/09/479bf4ac569e48fb7f11733db86cc486acaa01": "8b0575178080811c8175037021e0d975",
".git/objects/0a/d1481fa67b17e342d982edef7e8f44711f9c06": "544d4ebc412e5e4de90cbc912ca9c14c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/fb89a567f55fe9c53e738d56648c5cdd5fb7e6": "cce1e101c3bba2841ad1d913a8a593f9",
".git/objects/12/3a59b3c6bb78a518386a29fbd25d231e00803c": "e8f29e10b0a83047fac217b804e7a66d",
".git/objects/14/c51e2d9fd71d890ec94e590ce537c2fbbf192b": "41887a6b65bbf6bd2fff7fe320a7bff6",
".git/objects/15/1641973f378bc65a230070126da07bc18412af": "82900dd6ff8a62bfbe940b43c9eac48c",
".git/objects/18/09fbf732f4980e4300fe43a741333d54735edc": "99dd0bafaea7a61b32f7610f0017f54b",
".git/objects/1b/2358657a268c2b4ebf033f904418c49b2980d7": "159071929746f2c7cd85e33260767494",
".git/objects/1b/8a17cb047a7856f51d17f463aa6dacc072c1cf": "1c8ef17f8fa2d2a712f382bf10428fbb",
".git/objects/1c/275fc105c7219411cd3ed7b93ae8c52e8ccb80": "318dbdf461911ef3420a01d1e4a8f63c",
".git/objects/1d/7189a99c3ade846eb04092bc25bd4ada5d7a7d": "09a7822bea7ed16fa8e4f16b40b6cb8e",
".git/objects/20/22a551dba5d468cb6dd08bdc2581ffac9b89b3": "fcba90210d3c34624e73367adddafb0b",
".git/objects/23/30717b70c667c04f6112afd148aac7423bd98b": "e0b3e351d29250aaedfc4eb2e883ffe6",
".git/objects/24/5ff2d366bc6862f2d54a03093890cb1ea47f7c": "6cb19128a842c631ceeb61f6dfca983a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/8e5666d67a95a3db2874b3ed2936605855fbe2": "d3c270a9cded64ade67e9985a2a80b13",
".git/objects/29/3786ce480312216edd829d1ab72a59d3b0a030": "487a68a385c5b41dbd416219e4290162",
".git/objects/2b/c7432c0b8350393ca8393d1a131aab0bf9f4ca": "fa56557fe8e5b1a4e5e0d54eb9feb3d4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/103fb8a4922a7021859d0de600f729ccf449a5": "f538b1c2ef7dd00c99d9b8943df19cfd",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/ab591dbbe13404692b56348605adff98079dff": "f15d8b74eb9853988ef8aca92e1729d0",
".git/objects/30/35b570910c05686e84f9724353a36b1a8058c9": "d6015eaf30abf938a29d44b5a303e877",
".git/objects/32/cc1a3d35e3e416d68b92a811d5fbdf05475671": "11229fbfda19af3cad135a28b716e6a3",
".git/objects/33/3f2b72f2f3a3f2625e8cb4b3860ddfb3edc0d2": "eceed1c6490acd31b67955aed79d4a72",
".git/objects/36/9bd5f409cc5e6034cc65e0248bb9a1f0d56db7": "256decb4e046fe7519149160d2a0cdc8",
".git/objects/3b/f83e14f7cfd58a165955295d49fa3b2ef1a8d0": "fb2cc2445cd3e5bbc85b3b3f70802604",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/17d707c7b89de204eb0de6a42eadff42649d4f": "35b6c3a5a7d4a2f621e31d782eeaf341",
".git/objects/3f/05f19d6b1f5c3134b4a9052bf7a8962dcf37cb": "b50d4f0c17926c9c3071e2294ef4296c",
".git/objects/3f/b8c24419c665a43df8675c6fcf7710f511ef71": "c33aa38b80a842213c9fdaed04e47d1c",
".git/objects/41/4573d29a40abc62406c9f12b242f939ed701bd": "d0a06ca19d9e5159c7ebf0b46059c7e1",
".git/objects/46/45243012a94f0f3b448fd921d4badbb4e046af": "6e8dbef5bc4a2d5b7af5b9aad9f32374",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/730828eed1dcac4d84cae79e42ff6405bdd50a": "acf0adfc34b4b6d136c272358ad30ff4",
".git/objects/47/7478e5f5c334f1bb01b8f081843fe158aa7b85": "9924692f5bceadeac275773d6138e9d7",
".git/objects/48/99fd30d909c13aa06644ad6c3082ff48ce48bc": "416403737d6289a515af06187526bac5",
".git/objects/4b/8f06e1dea775df8a3f9576d055fd0e32b3176e": "689f4f90a7f2c8387a48c9e2a567ac4d",
".git/objects/4d/bdc54f40b2081daf30e5585871c9eb67b3c19e": "7a431decdcc111f2bd404e15effc0aa7",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/c1703fa4b68a358ed4a5fb0a7bdbea116b6007": "c2d7d4ba672c0b0619a1b18345427445",
".git/objects/52/40fa769a11f62e1492104d563c133211711e1b": "c06d0dc81ad094ec444cb755602e9ba5",
".git/objects/53/fbdc17e0aa9a9253b90254393895737e07021e": "74062bf91761b3c3bfda81d8f4b0d2b0",
".git/objects/54/524603e36a76045dea1dfef58752e6ed4c7fba": "a163f92023e30199cac9a2132dae00d3",
".git/objects/54/af591ce932a4116fb3064853aa9aa119f9ec12": "608b1688bca725354b274dde766bf309",
".git/objects/59/d9dc605a46644f870ae700bbe922d4677b5652": "c7ce5eae107786aa3402312ac973a7ba",
".git/objects/5b/14aabe5ebc13551b95b7b6028d77b74cb20728": "acb85bfb41dc890b9bb79c10a40e667a",
".git/objects/5d/45c2b778b3ebdd8a13e1a659fc7d59b14f3abc": "cdae1acb3b944380513b4d40f63f7271",
".git/objects/5f/a8355577ac454082c2662dee46492490bf7134": "15216b62437ed671e9919886a09a4848",
".git/objects/60/aa26c78ec4e3dadebc8715a8f645ecc93a23a6": "8e2e323dbb16e9ac007361653040f98e",
".git/objects/63/9dd52a844f5960bcf2bf2c4e00b02c66af1f1d": "34e736b5964ee19a13436a3c5132e4eb",
".git/objects/63/ee88e537f4d5c68554759bc68bba6352c06532": "eded3321410b35018b12f286b212aaba",
".git/objects/64/07044ae5f14dd80f22bd0b332ec89a3108b7f5": "a5ad0dee9bcd479e8ccd132f4897053e",
".git/objects/64/345e4338e200482e9a0471531bd67c9f4504ff": "421f3d2ddaa55e1d0c923639c7706bfb",
".git/objects/64/f4d781bc45dde8c3bf14ca50248e5c9189a8f1": "77d57d67edb4cbae3bc1cbcdbee2ec72",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/68/263ee724e3bfbfecf501882325e2b077f8ccca": "1d0882e8d72af0ac7e296697e6231c81",
".git/objects/6e/c07571d1ca1815d4f9d5db99c6ef5acec48c61": "7783161eef254fe0f2c99954fbfcb09b",
".git/objects/6e/c0e5fd98639ef9e8d42f6824fed1e2b262684b": "0a7d713c25e6545c51a98fb560f5838a",
".git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/75/cfba17ee4daf0b0715b1fe6c023e3709d5fc01": "7995fd546b1260d4bad3a2d0d70f9fb3",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/868e3315d291f44c21524fc5fbd030ee01410f": "c65ce3aa7b3cfb28d9a35fbf55f4ae9f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/9b2e283331a350a679450432000c24617871ff": "cc2db69af40290f59366d220273a0655",
".git/objects/7c/8c4f07ff65dcda6b12c46bc2f947271771ca96": "bbe49ffce4064fbc24d5042dbed7e341",
".git/objects/7c/a42d948563a361c15424766c1b24153b7b5b61": "dde55694c80d5ca4af3c2728ef7ce14b",
".git/objects/7e/10909e7bfbe628f4669189312fd8a087f35265": "bdcf47ae6dce345db9df6864cb3ad9f5",
".git/objects/80/1c83637b1fd0ffb81f191b086e8ece351b7c3a": "78fe6c2c46681bd0eb998202003b6049",
".git/objects/81/adf2a890bfdf5d9f7fe7fa9b855fe6536395af": "ea7575c4edbae99d94474efa6ab99d35",
".git/objects/83/6bcee40aa1bc9064253397d0b7e36cac5a7d04": "983e58e933bcfa0237c6bf870f201bb6",
".git/objects/84/198bc81f9b9bdafa44c31a0fd7ad30a3b66bb3": "03e86f38188ae4d1681c36b8a19dbff7",
".git/objects/84/9de414f03028c8c236d85d1dbf3e7dd5de9ae9": "4efb798f032b04767532fa17590f2d74",
".git/objects/86/7a7602aed6ec316728a8cb84a30b5691d50b05": "4756893663fe510964982724e91382fc",
".git/objects/86/c08ab8dbb2fbea1f6ab0f9249683891b10f591": "d928c8850b5973b19097b9de9228fa31",
".git/objects/87/50fa5184e508713238c5c71d93988687e9a3b4": "d1a8a24a5e62e239d1b279d9a9c82483",
".git/objects/88/27773f505914dc4636aed88bfe811577a17322": "af21308d84afbfbee63949b3d94fa9a3",
".git/objects/88/36f47aac166d7ccb042da90a4f230fb24256ff": "5230ba28562eff7bf8fc26d7e1495e7f",
".git/objects/89/073f9f5a0dc8851688fb99593a6682c553be7a": "6fd529f48c72d34aab34787ba86a91a7",
".git/objects/89/af84d98355cc33038e78270f13b36cf27c116d": "3cfb8c0aee59ecdb6360fe8256563095",
".git/objects/8a/0c16c55d4cc7f9c866e0bcb72ec805387162a9": "f77cea4327d41a094ff3e13445f6430c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/47e2ed75076ce1d0d12bbef6c3f08713588cfc": "00f3743f0e9364e468f8ac86a331d06f",
".git/objects/93/a681ac4f05c5a8a9fa77d8092e8e4bcf4d3452": "be229a561ecb31bf7bec8eaa3b66ec08",
".git/objects/95/e24d894b8acf1f09636fec3fdb8318cf422410": "40cb41b9d57cb6ede752002a3b8270ab",
".git/objects/96/4f3ab6f75f0fa15fe575872aef37d38f0fbf27": "77dd3b762bc168ac4a0855e2429150a9",
".git/objects/98/873389129edd26215458cdb2c34efb6394ce0e": "a8182d54cb152a48b65a7d0501ed07bf",
".git/objects/99/2fadaf7a7c6d30ea2871515beb6b24cf390eaa": "eee749572d1c26666a8487befa327222",
".git/objects/9b/ab052e15c0ae744c59e63403f8de20310085b6": "e562d75151cf9da4a132dcbd2484cfa3",
".git/objects/9b/b5ef0dd296358a887d1e94ae9ad30cf3f4954c": "eb2c29a9b2760429eed3a64201127b3a",
".git/objects/9d/268901afe3a208782ed649b61493a07964eb3b": "857881dceb443af015022540d163a9c0",
".git/objects/9e/e5295b79f734f1034a71b11b73ed37b2207d39": "8db3e5be62e68303250c8593f81eec69",
".git/objects/9f/c5ff74f48a605ed4fa6d15621389b916c43b18": "0f52d3c5ca8da66ceeb5adaecdec6251",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/f135aa6ad05be552463cd40b5adf68e479daa1": "9dcb36f967ebb859ed97304b6f1d161e",
".git/objects/a5/de4d65c6caf91d075c669f93fca9de40dc1037": "94b1c7cf32d4b9e71d7996f706dc898b",
".git/objects/a8/4445cc231fa96b5ee245e5f97716db926bf925": "082ad2ebd7aac13a57e764c2a873f766",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/af/ce67431f4a14834ecf64372d359fc4774ddeb1": "eb8b3c45256b88a09be7535057f978a6",
".git/objects/b2/1777beebe31716d9d15234b089b2b0264b91bf": "36ec17998c1990e76b7c9d4efa87405d",
".git/objects/b3/6eec85249f0c0ade33435c68b2ffd378cd544e": "1147871a054e9b56427631034bb4fd27",
".git/objects/b4/195b67825a299ea3a5ee54ac31938d92d6373a": "50ad4d46f61088dc1a29a5937c082d3d",
".git/objects/b4/56ce25e9d3abf838b3fb96a14f3fbde6669f44": "17b2ff15d2a42aa3e1dc045311b04fa0",
".git/objects/b9/be69845e29e880af6efb11ce32c48e3e3d79d6": "f167ee39a2cb979264915c1d56d84cc9",
".git/objects/bf/3bd964e096c2dc5ef6f03903ce71762cd3bff7": "ec5584f95d7aa50f87bddb1d59249fe9",
".git/objects/bf/94604bb3c091f250bcabe2f60e99df26cf7136": "c9ed2daf351ab7557650c40c2e2e0128",
".git/objects/c0/41e355ac48fc88341329c40dda9c8267d735e7": "d3fb0c600e4b0d0b554fc9d0bd532065",
".git/objects/c3/76e60987e15b727c84105dab51e98731a0afe0": "356c2e7ef6c5ef2d61fd8eeb0fe42cd0",
".git/objects/c3/ecd2140bc9d4ff9bda054c475ce5677cf8f597": "648a7ca699c31ccd6cd70487b466870e",
".git/objects/c8/51aa422ef146c7460b6c3794b5014b2a97fe51": "cd865f6f26a32a90e8d458757641d3fd",
".git/objects/ca/bcc2420cb340e954c52e5535d305a445096a07": "a1d8a256524b188ce0c9ba26b72e7809",
".git/objects/cc/486e76e83a520a1854e0d265f424152910a47a": "84f19844f2473541cfee159507a7c23a",
".git/objects/cc/df4129fd48596e5dba6769c38463d3a0477469": "0d409f25d97a0b01687f546ea847b6e0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/70466aff3e3c0fc3ba4b43edbaf83caf5221cb": "e550b10949f3b19a76d522c5632165fd",
".git/objects/d0/199ab36d2ecca82fe289ead39db30d9c83c9a4": "99ebbf96af0c6ba138b94336a50deb4b",
".git/objects/d4/042dd2d587f5bc36040ee93aa9183e3c9917d1": "f421f78db453e0a6c239249df2087fad",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/16bf32382b9c48b0787ef5bcbe4ad313206449": "90edbc23c29438ba70f4059f17226bde",
".git/objects/da/e8b52a9ab584d247c34407783fa5e37dcafcc4": "98954b63655c88d133e04a6a7585a20e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/010051dd15d7e516a1096628622e4e2ebd3718": "2e4c8eb15466476716063e729f6f99b6",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e1/6d359c2a8a87f8217e234245f6b09d41add372": "16abc5cac89a9aea0d1dbb63bfc76074",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b53e72b2bc8171f14dd55d07d377b8fc0d5ab1": "48b3b7367e141e7ca52f21aaca7497b7",
".git/objects/e9/1031ba291f6751d125648e4222609500dac7df": "e656a7c6b6741a894fba0603a12001f2",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/25e1517fb87563455dd556344b5da1c397e867": "d89838504f1cc088f2d359afe9f04961",
".git/objects/ed/0eaee320670eea942f6798fa655518e17559af": "a3065740116e7e7f7e678bc5dd6b32a9",
".git/objects/ed/0edecd317f0b11fc478f62894e7511b6115fb0": "9bec71db5c9a9ed1622b2fc5fd8452d7",
".git/objects/ef/0bf0446e2730b2ecdbb2d0893f85a928c91ba4": "5a846020ffa6022494931d2b11336b77",
".git/objects/f1/dcef91e804f92763f292b407e45c54a21676c9": "9d1aaf97c92c46137235124afcd572ce",
".git/objects/f3/4747c2932556695284aea3cc26788ff7dcb987": "38daf0b5b455413d663520038a743859",
".git/objects/f3/d42b2ac6655c5081e2323068c1f7ab776b208c": "c8c757251924f3002562aaf0247bf4bb",
".git/objects/f5/eaf29c0f3bbcf7a3f785b126b7e0fa7fb4f289": "ed341cac4ed6d81b93bec123fc9352a5",
".git/objects/fb/83dae80d5a485afbc62bfc6e5a55989944afe5": "4ff4d095a22e350e4a9af2d5a5281d76",
".git/objects/fc/3224529e480b8cc28ac640bde53ef9e40afb73": "3bea2a9fc68e52e71bf682f8f9eb8b12",
".git/objects/fc/8e206c8416a8d273a76bfc9b103028300f9059": "89cbb4497ab701977b8989ff502b40ad",
".git/objects/fd/78687219cc4980648bf47a28e5d7cf91585b99": "a220992f662df724969fd92427f541fa",
".git/objects/fe/5270699f2a233431642e06ed24d0977c57f6f1": "a8d650cfc9c52db94668e568ba789b51",
".git/ORIG_HEAD": "36f361ee52e8ed055aa91db6676df7d3",
".git/refs/heads/development": "7321cac0a723483755931601b878e7dd",
".git/refs/heads/main": "cf3dc92e63cc819c62db753cf21b3758",
".git/refs/remotes/origin/development": "7321cac0a723483755931601b878e7dd",
".git/refs/remotes/origin/main": "cf3dc92e63cc819c62db753cf21b3758",
"assets/AssetManifest.json": "3204829fc2179a7383b55eb44304cc15",
"assets/assets/config/default.conf": "ca47b249d50889f4232d09f52e513fef",
"assets/assets/config/development.conf": "07c24270942cd0ef761815d6966ef4c6",
"assets/assets/config/development_android.conf": "92202c58c09ddc058a3dbf0a90a6a1c3",
"assets/assets/config/production.conf": "5a4c4bbd28fc23f4df005e2fe4b4b247",
"assets/assets/images/google_logo.png": "0cd7e66def2b5e9a593cbe0791b8db0b",
"assets/assets/images/google_logo_small.png": "d5bfe5cfce5f815029b244e5b77187b3",
"assets/assets/images/stripe_logo.png": "e9ea4456945e9c1bb505b79897da4cb0",
"assets/assets/images/stripe_logo_small.png": "2b89f9d6feac08e0f8709a611aa2d38c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "37b924c98ce5938421e434be1526eb60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "18c974f168b4baaa55970516028216d9",
"favicon.ico": "016252b45535f5b74d1c334ca8624b6d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "1f189f03f1ae8945ea4a1aa67f8d6d0a",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icon.ico": "3a0e1d8de2ca9b2a5288bf8eccb2481b",
"icon.png": "e7737be71f27070487918d64b7fad154",
"icons/apple-touch-icon.png": "8fea2e46fa778fa6cad56606aa840f51",
"icons/Icon-192.png": "e2dfb3eb0b9964a2557f9a2e7f847c62",
"icons/Icon-512.png": "f11d9f989b3e61e74b108909611d956c",
"icons/Icon-maskable-192.png": "f7598be1b42cf8374b7e506edc81c8d2",
"icons/Icon-maskable-512.png": "5d0da19c3f49981e133d5b2cab2f70b6",
"index.html": "1aeebfa5cde9d6cb818ed32f6bb30a1b",
"/": "1aeebfa5cde9d6cb818ed32f6bb30a1b",
"main.dart.js": "fae677f57144c880bc93537b96d15f64",
"manifest.json": "6c9fad5350d48fb7b92c7261474ab2c0",
"privacy-policy.html": "e2c538c26c4a15d94b48520a312438e1",
"version.json": "1ff97e97e6923454d2ec0de481544593"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
