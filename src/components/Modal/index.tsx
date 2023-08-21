import { useState,FormEvent, ChangeEvent, useEffect } from "react"
import { useProductsList } from "../../hooks/useProductList"
import { IUser } from "../../typings/ProductsList"

import "./styles.css"

export function Modal() {

  const [modalOpen, setOpenModal] = useState(true)
  const [years] = useState(generateYear())
  const { setUser } = useProductsList()
  const [birthdate, setBirthdate] = useState({
    day: 1,
    month:1,
    year: new Date().getFullYear()
  })
  function generateYear() {    
        const currentYear = new Date().getFullYear()
        const years: number[] = []
      
        for (let year = currentYear; year >= 1920; year--) {
          years.push(year)
        }
        return years
  }
  const calculateAge = (birthdate: string) => {
    const currentDate = new Date(),
      currentDay = currentDate.getDate(),
      currentMonth = currentDate.getMonth() + 1,
      currentYear = currentDate.getFullYear(),
      birthdateArray = birthdate.split('-'),
      day = Number(birthdateArray[2]), 
      month =  Number(birthdateArray[1]),
      year = Number(birthdateArray[0])

    let age = currentYear - year
    if (currentMonth < month || currentMonth == month&& currentDay < day ) {
      age--
    }
    return age >= 65
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {  
    e.preventDefault()
    const {day, month, year} = birthdate
    const newBirthdate = `${year}-${month}-${day}`
    const newUser: IUser = {
      birthdate: newBirthdate,
      isPromotionApplied: calculateAge(newBirthdate)
    }
    setUser(newUser)
    localStorage.setItem('user__birthdate', newUser.birthdate)
    setOpenModal(false)
  }

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const {value, name} = e.target;
    setBirthdate({
      ...birthdate,
      [name]: Number(value)
    })
  }

  useEffect(() => {
    const birthdate = localStorage.getItem('user__birthdate')
    if(!birthdate) return
    setUser({
      birthdate,
      isPromotionApplied: calculateAge(birthdate)
    })
    setOpenModal(false)
  }, [])

  return (
    <>
    {modalOpen && 
    <section className="modal-overlay">
      <form className="modal" onSubmit={handleSubmit}>
        <div className="modal__header">
          <h2 className="modal__title">Olá! Que bom te ver aqui.</h2>
          <p className="modal__subtitle">Para continuar, informe a sua data de nascimento</p>
        </div>
        <div className="modal__body">
         <div className="modal__data">

          <select name="day" className="data__day" onChange={handleChange}>
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select name="month" className="data__month" onChange={handleChange}>
            <option value="01">Janeiro</option>
            <option value="02">Fevereiro</option>
            <option value="03">Março</option>
            <option value="04">Abril</option>
            <option value="05">Maio</option>
            <option value="06">Junho</option>
            <option value="07">Julho</option>
            <option value="08">Agosto</option>
            <option value="09">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
          <select name="year" className="data__year" onChange={handleChange}>
            {years.map(year =>  <option key={year} value={year}>{year}</option>)}           
          </select>
         </div>
        
            <button className="modal__button">Acessar Loja</button>
    
        </div>

      </form>
    </section>
    }
    </>
  )
}

export default Modal