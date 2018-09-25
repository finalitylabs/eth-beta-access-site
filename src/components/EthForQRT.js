import Api from '../Api';

const ethForQRT = async () => {
    return new Promise (async (resolve)=> {
        const api = new Api();
        const account = await api.getAccount()[0];
        const tx = await api.purchaseQRT(account);
        resolve(tx);
    });

}

export default ethForQRT;