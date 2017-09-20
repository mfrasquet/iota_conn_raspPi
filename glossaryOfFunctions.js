
var IOTA = require('iota.lib.js');

var myAddress = 'KR9EZO9VFSNYTOEPQBIOVYHGBJQGHZQICDDBYIDTBBCHBZPCGXPUYMXXYVBQHBDXTVSKADTJRVINZXK9X';

var mySeed = ''; //replace this!
const MWM = 9;


var iota = new IOTA({
  'provider' : 'http://52.59.39.201:14700'

});

iota.api.getNewAddress( mySeed, { 'checksum': true }, function( e, address ) {
    if (!e) {
        console.log("Generated new address: ", address)
    } else {
        console.log("Something went wrong: ", e);
    }
})

//http://35.158.244.116:14700
iota.api.getNodeInfo(function(error, success) {
    console.log(success);
});

iota.api.getInputs(mySeed,function(e, inputs) {
    if (e) throw e;
    console.log("Available inputs:", inputs);
});

iota.api.getTips(function(e, Tips) {
    if (e) throw e;
    console.log("Tips:", Tips);
});

iota.api.getNeighbors(function(e,  neighbors) {
    if (e) throw e;
    console.log("neighbors:",  neighbors);
});

iota.api.getTransactionsToApprove(4,function(e, inputs) {
    if (e) throw e;
    console.log("Transactions to approve:", inputs);
});

Tx_Array=['VZYZKJUKZIOXPEETKGWBWICELIJUGUXFLDSOTPIDSQXOPAQUHBJLDZGLOLYMITRGILT9DFXOUHCAIO999']
Tips_array= [ 'PHNMUFEIHMDDMOXTMFYIGHX9MFFPZZTVMDHJJEGFVRCVJEXSLYU9JYGZEZH9FICNDILTUGTCVQY99L999',
'KNHEDNGZOTBUODOQNOPHPAOIOWGWGQLLKBAREIQZWIYDCZVQYCGCJGYPWZMNIIMZKIKDFDMEROJEQF999',
'DQBXSFDSWNP9ZVNOTCZCDWCYNKVAIHAQHSVVWDVPTNEXQSGPPZRDNXLIRFIRVUGELBPQUKSKQEDKCX999',
'VJTD9EUPIKSCHPQWHY9ICEJFBYQMWCIMSTIAMXPCGPJWNJFJGDZNXSYFTIAFJMCSRETJIKVWWJHNLX999',
'BNTNNJDGVJJAXVNDJJIY9ZDJDEDATHFLXCBWGJAHMYDCUSH9KTPKGZMUDEHOFWWOIBHCCHHMDHUAEG999',
'KSLGQPW9FZTUYALNAINSFXBKWEDZLGNGTRALOPZYZMORUEIGQRZPJNQUIEDWDTOIWPTDAYRRPULDAP999',
'I9VF9ESDIGYBZQXGIRBUBRBUVWJMNVXTRSZSVNLZXDMHVGLXLVOXQYFFSLHPPIXEOYTOWBZBZZUUPD999',
'HM9UXRNZBPKJBQXW99QZQDBCVOICDDLJDDOPVQWPWYSUWXZFAGBWIDJTUVHBUTUJVEAINLYAPGOCWB999',
'VZYZKJUKZIOXPEETKGWBWICELIJUGUXFLDSOTPIDSQXOPAQUHBJLDZGLOLYMITRGILT9DFXOUHCAIO999',
'FUAUUDVBXWXFIAOMSLKWKSNGUXNM9RGFQHHRUUH9KBAZEHWEBFYJCOQHOHJGLVZVFRXSCFVQEYQOBQ999',
'CDMQQRXBIMWTESXJXGVPIXAXVJ9PKFQPHECCDDDCOVVLPJDO9DKHXIJVZXJDUTNLNRGOTJBN9BCITI999',
'DCV9ZCHC9ARYDFXZGPRWTXWYSXV9ZBBPWBJCKSCEZIZIMZSQKMQPBVWZH9EERRYHVB9GTZMKNGRXSN999',
'EHJOOJBVYKKGZZROWUUPXBALTICCLMHMFWIQPMVG9FGGKTDYBODAWDXHNFKLEBKYUHJXXFVEOFEGXG999',
'GYQZBUKROCDBCKAVQCBPOWOUH9RTXIWEPFSDTEP9WXOMACLGAXPWTJAPPCTEFYDJFLMZRCCRCIYZOC999',
'ICOILPPVPBDQJSNXSQVPIPOXQXOO9EOQFNRJFPMOZ9DO9WK9JUSPLJJKLFPB9AVJVVERCENIWAKTKX999',
'EXBYIRAQBMATKFDBWGDFYWQAOGUMWVPVJZDDTECPAZYNVQRQSJBYYGFLAWAYNBFCMFIDIEZCZR9DEZ999',
'HSA9YSIAIMMDXI9ANYAMLPWZDMKDGSFCLWVBQGPSUNSSND9GXAEAZJTCOAFOXUXFZYGRLBUDKFW9LO999' ]

iota.api.getInclusionStates(Tx_Array,Tips_array,function(e, inputs) {
    if (e) throw e;
    console.log("Transactions approved?:", inputs);
});


iota.api.getAccountData(mySeed,function(e, inputs) {
    if (e) throw e;
    console.log("Available inputs:", inputs);
    console.log("Probando la propiedad balance:", inputs.balance) //El objeto tiene la proppiedad balance
    console.log("cuantas cuentas hay:", inputs.addresses.length)
    console.log("Probando la propiedad address:", inputs.addresses[0]) //El objeto tiene la proppiedad address
});

myAddress=['KR9EZO9VFSNYTOEPQBIOVYHGBJQGHZQICDDBYIDTBBCHBZPCGXPUYMXXYVBQHBDXTVSKADTJRVINZXK9X','YWVZYWOWPQLCPUNNH9OPHXPUQSDEDMULHDLLFXEXXRLFFITKGEKMGEEEESDACODZZEU9UTNGRTFRIUAND'];
iota.api.getBalances(myAddress,100,function(e, inputs) {
    if (e) throw e;
    console.log("Available inputs:", inputs);
});

//function to send a Random number
function sendRand(randNum) {

  // the message which we will send with the transaction
  var messageToSend = {
      'name': 'miguel',
      'message': 56
  }
  // Stringify to JSON
  var messageStringified = JSON.stringify(messageToSend);
  // Convert the string to trytes
  var messageTrytes = iota.utils.toTrytes(messageStringified);
  console.log('myMSG', messageTrytes) //ODGABDPCADTCGADBGAGDPCBDSCFDCDGAQAGAADTCGDGDPCVCTCGADBGAPBXCFDGDHDEAADTCGDGDPCVCTCEAUCFDCDADEABCPCBDSCFDCDEAGDTCBDHDEAKDXCHDWCEASBYBCCKBSAGAQD
  var myAddress = 'KR9EZO9VFSNYTOEPQBIOVYHGBJQGHZQICDDBYIDTBBCHBZPCGXPUYMXXYVBQHBDXTVSKADTJRVINZXK9X';
  var transfer = [{
      'address': myAddress,
      'value': 0,
      'message': messageTrytes
  }]


  // We send the transfer from this seed, with depth 6 ancurl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

  iota.api.sendTransfer(mySeed, 3, MWM, transfer, function(e, bundle) {
      if (e) throw e;
      console.log("Successfully sent your transfer: ", bundle);
  });

}

var randNum = Math.random().toString();

sendRand(randNum);
console.log('random number sent =', randNum);
