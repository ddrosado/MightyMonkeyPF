import {db} from '../../db'
const {Court,Sport} = db

export default async()=>{
    const court = await Court.findAll({
        attributes: [
            'id',
            'name',
            'description',
            'isAvailable',
            'noMemberPrice',
            'memberPrice',
        ],
        include: {
            model:Sport,
            as:'sport',
            attributes:[
                'name',
                'description'
            ]
        }
    })
    return court
}   