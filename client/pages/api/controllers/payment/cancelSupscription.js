const { default: axios } = require("axios")
const { db } = require('../../db')
const { User } = db


module.exports = async (data) => {
    switch (data.type) {
        case 'cancel': {
            const user = await User.findOne({ where: { id: data.userId } })
            const res = await axios.put(`https://api.mercadopago.com/preapproval/${user.memberId}`, {
                status: 'cancelled'
            }, 
            {
                headers: {
                    Authorization: 'Bearer TEST-5280417047762022-072715-6cdc99477060d48978bc1cf779776e2e-1431922934',
                    'Content-Type': 'application/json'
                }
            }).then(({data}) => data)
            user.update({ isMember: false, memberId: null })
            return res
        }
    }
}