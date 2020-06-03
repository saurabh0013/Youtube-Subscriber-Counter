
getsubs();
async function getsubs(){

  // Carrymynati

    const channelIdCarry = 'UCj22tfcQrWG7EMEKS0qLeEg'
    const urlCarry = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelIdCarry}&key=AIzaSyCjlpCxj8Xh5Qh_yhTV3KAlyo7EH3oPCV8`;
    const responseCarry =await fetch(urlCarry);
    const dataCarry = await responseCarry.json();
    const subscriberCountCarry = dataCarry.items[0].statistics.subscriberCount
    console.log(subscriberCountCarry);
    const rootCarry = document.getElementById('carry');
    const carry = document.createElement('p');
    const nodeCarry = document.createTextNode(`Subscriber : ${subscriberCountCarry}`);
    carry.append(nodeCarry);
    rootCarry.append(carry);
  

    //AmitBhadana
     
    const channelIdAmit = 'UC_vcKmg67vjMP7ciLnSxSHQ'
    const urlAmit = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelIdAmit}&key=AIzaSyCjlpCxj8Xh5Qh_yhTV3KAlyo7EH3oPCV8`;
    const responseAmit =await fetch(urlAmit);
    const dataAmit = await responseAmit.json();
    const subscriberCountAmit = dataAmit.items[0].statistics.subscriberCount
    console.log(subscriberCountAmit);
    const rootAmit = document.getElementById('amit');
    const amit  = document.createElement('p');
    const nodeAmit = document.createTextNode(`Subscriber : ${subscriberCountAmit}`);
    amit.append(nodeAmit);
    rootAmit.append(amit);


    //Bhuwan Bam 
    const channelIdBhuwan = 'UCqwUrj10mAEsqezcItqvwEw'
    const urlBhuwan = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelIdBhuwan}&key=AIzaSyCjlpCxj8Xh5Qh_yhTV3KAlyo7EH3oPCV8`;
    const responseBhuwan =await fetch(urlBhuwan);
    const dataBhuwan = await responseBhuwan.json();
    const subscriberCountBhuwan = dataBhuwan.items[0].statistics.subscriberCount
    console.log(subscriberCountBhuwan);
    const rootBhuwan = document.getElementById('Bhuwan');
    const Bhuwan  = document.createElement('p');
    const nodeBhuwan = document.createTextNode(`Subscriber : ${subscriberCountBhuwan}`);
    Bhuwan.append(nodeBhuwan);
    rootBhuwan.append(Bhuwan);

    //Ashish Chanchalani
    const channelIdAshish = 'UC7eHZXheF8nVOfwB2PEslMw'
    const urlAshish = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelIdAshish}&key=AIzaSyCjlpCxj8Xh5Qh_yhTV3KAlyo7EH3oPCV8`;
    const responseAshish =await fetch(urlAshish);
    const dataAshish = await responseAshish.json();
    const subscriberCountAshish = dataAshish.items[0].statistics.subscriberCount
    console.log(subscriberCountAshish);
    const rootAshish = document.getElementById('Ashish');
    const Ashish  = document.createElement('p');
    const nodeAshish = document.createTextNode(`Subscriber : ${subscriberCountAshish}`);
    Ashish.append(nodeAshish);
    rootAshish.append(Ashish);

}
