



const createUser = async ( {id, name, email, password, isAdmin} ) => {
    
    
        const newUser = await User.create(
            {
            id,
            name,
            email,
            password,
            isAdmin,
        }
        
    );
    }

module.exports = createUser
