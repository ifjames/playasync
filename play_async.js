console.log("Hello! Welcome!");

setTimeout(() => {
    console.log('Wait time is over.');
}, 2000);

console.log("Processing your order...");

const confirmOrder = () => {
    return new Promise((resolve, reject) => {
        let isConfirmed = true; 

        setTimeout(() => {
            if (isConfirmed) {
                resolve('Your order has been confirmed!');
            } else {
                reject('Order confirmation failed.');
            }
        }, 1000);
    });
};

const prepareOrder = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('After 3 seconds, your order is prepared!');
        }, 3000);
    });
};

const deliverOrder = () => {
    return new Promise((resolve, reject) => {
        let isDelivered = true;

        if (isDelivered) {
            setTimeout(() => {
                resolve('After 5 seconds, your order has arrived!');
            }, 5000);

            setTimeout(() => {
                reject('After 5 seconds, your order could not be delivered!');
            }, 5000);
        }
    });
};

confirmOrder()
    .then((confirmMessage) => {
        console.log(confirmMessage);
        return prepareOrder();
    })
    .then((prepMessage) => {
        console.log(prepMessage);
        return deliverOrder();
    })
    .then((deliveryMessage) => {
        console.log(deliveryMessage);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Awaiting your delivery...");
