import moment from 'moment'

export const dateFormater = () => {
    let formatedDate = ``
  
    const weekDayName = moment().format("dddd");
    const day = moment().format("DD")
    const month = moment().subtract(1, "month").format('MMMM')
    const year = moment().format('YYYY')
    
    formatedDate = `${weekDayName}, ${day} ${month} ${year}`
    const time = moment().format("hh:mm")
    return {
        parentDate: formatedDate,
      childDate: time
    }
}