export const getCurrentdata=()=>{
    const currentDate=new Date().toLocaleDateString
    ('en-US',{
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",

        })
        return currentDate
}