export default async function getUser(req, res) {
    return res.status(200).json({users: 'first user'})
}