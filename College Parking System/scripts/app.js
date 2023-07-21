import Faculty from "./user/Faculty.js"
import Student from "./user/Student.js"

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registerationButton').addEventListener('click', handleUser)
    document.getElementById('vehicleRegisterationButton').addEventListener('click', handleVehicle)

    document.querySelector('form h1').addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('collapsed')
    })
})

const handleUser = (e) => {
    e.preventDefault()
    let userName = document.getElementById('userName').value
    let userContact = document.getElementById('userContact').value
    let role = document.getElementById('role').value
    let user = role === 'student' ? new Student(userName, userContact) : new Faculty(userName, userContact)
    alert(`Congratulations !! You are successfully registered as ${role}. Your registeration id is ${user.id}`)
    document.getElementById('user').classList.toggle('collapsed')
}

const handleVehicle = e => {
    e.preventDefault()
    let vehicleName = document.getElementById('vehicleName').value
    let type = document.getElementById('type').value
    let vehicle = null
    switch(type){
        case 'cycle':
            break;
        case 'motorCycle':
            break;
        case 'car':
            break;
    }
}