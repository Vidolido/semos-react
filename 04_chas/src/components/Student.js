import React from 'react'
import PropTypes, { object } from "prop-types";

export const Student = ({studenti, semestar}) => {
  return (
    <div>
        <table>
            <tr>
                {
                    studenti.map( student => {
                        return <th>{`${student.ime} ${student.prezime}`}</th>
                    })
                }
            </tr>
            <tr>
               {
                    studenti.map( student => {
                        return <td>{`${student.index}`}</td>
                    })
                }
            </tr>
            <tr>
               {
                studenti.map( (student, i) => {
                    return <td key={i}>{`semestar: ${semestar}`}</td>
                })
               }
            </tr>
        </table> 
    </div>
  )
}


Student.propTypes = {
    studenti: PropTypes.arrayOf(object).isRequired,
    semestar: PropTypes.string.isRequired
};

Student.defaultProps = {
    studenti: [{ime: 'Trajche', prezime: 'Trajchevski', index: 98766}],
    semestar: 'Zimski'
};