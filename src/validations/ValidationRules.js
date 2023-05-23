 
export const isEmail = async (email) => {
     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.;
        if (!regex.test(email)) {
            setPasswordError("Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.");
            return;
          }
}