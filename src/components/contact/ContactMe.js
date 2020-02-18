// import Button from '@material-ui/core/Button'
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent'
// import CardHeader from '@material-ui/core/CardHeader'
// import { withStyles } from '@material-ui/core/styles'
// import TextField from '@material-ui/core/TextField'
// import Tooltip from '@material-ui/core/Tooltip'
// import { Call, MailOutline } from '@material-ui/icons'
// import PropTypes from 'prop-types'
// import React from 'react'
// import CopyToClipboard from 'react-copy-to-clipboard'
// import WhatsappIcon from '../images/whatsapp.svg'

// const defaultMessage =
//   'Hallo%20Herr%20Wischlinsky%2C%20%0A%C3%BCber%20Ihre%20Webseite%20bin%20ich%20auf%20Sie%20gesto%C3%9Fen.%20Vielleicht%20k%C3%B6nnten%20wir%20uns%20mal%20pers%C3%B6nlich%20unterhalten.%0A'
// const whatsappHref = text =>
//   `https://api.whatsapp.com/send?phone=491635622166&text=${text}`
// const mailHref = (body = '', subject = 'Kontakt%20%C3%BCber%20Website') =>
//   `mailto:andre.wischlinsky@gmx.de?subject=${subject}${
//     body ? `&body=${body}` : ''
//   }`

// const styles = theme => ({
//   card: {
//     margin: 10
//   },
//   button: {
//     margin: '15px auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingLeft: 40,
//     height: 50,
//     width: '90%',
//     fontWeight: 700,
//     background: 'linear-gradient(90deg, #c4de9999 55px, #b8da88 55px)'
//   },
//   contactOptions: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative'
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     marginTop: theme.spacing.unit,
//     marginBottom: theme.spacing.unit,
//     width: 260
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%' // 16:9
//   },
//   actions: {
//     display: 'flex'
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest
//     }),
//     marginLeft: 'auto',
//     [theme.breakpoints.up('sm')]: {
//       marginRight: -8
//     }
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)'
//   }
// })

// class ContactMe extends React.Component {
//   state = { expanded: false }

//   handleExpandClick = () => {
//     this.setState(state => ({ expanded: !state.expanded }))
//   }

//   handleClick = (e, type) => {
//     e.preventDefault()
//     const name = document.getElementById('form-name').value
//     const phone = document.getElementById('form-phone').value
//     const mail = document.getElementById('form-mail').value
//     let message = name ? `\n Mit freundlichen Grüßen,\n${name}` : ''
//     message += phone ? `\n\n 📞${phone}` : ''
//     message += mail ? `\n 📧: ${mail}` : ''
//     message = encodeURI(message)
//     document.getElementById('contact-whatsapp').href = whatsappHref(
//       defaultMessage + message
//     )
//     document.getElementById('contact-mail').href = mailHref(
//       defaultMessage + message
//     )

//     switch (type) {
//       case 'whatsapp':
//         window.open(document.getElementById('contact-whatsapp').href, '_blank')
//         break
//       case 'phone':
//         break
//       case 'mail':
//         window.open(document.getElementById('contact-mail').href)
//         break
//     }
//   }

//   render () {
//     const { classes } = this.props
//     return (
//       <div id='contact-form'>
//         <Card className={classes.card}>
//           <CardHeader title='Kontaktieren Sie mich' subheader='' />
//           <CardContent>
//             Die Angabe Ihrer Daten ist{' '}
//             <strong>freiwillig und nicht notwendig</strong>, um mit mir Kontakt
//             aufzunehmen. Selbstverständlich werden die Daten nicht an Dritte
//             weitergegeben oder für Werbezwecke verwendet. Sie dienen lediglich
//             einer besseren Kontaktaufnahme.
//             <form className={classes.container} noValidate autoComplete='off'>
//               <TextField
//                 id='form-name'
//                 label='Name'
//                 className={classes.textField}
//                 type='search'
//                 autoComplete='name'
//                 margin='normal'
//                 variant='outlined'
//               />
//               <TextField
//                 id='form-mail'
//                 label='Email'
//                 className={classes.textField}
//                 type='email'
//                 autoComplete='email'
//                 margin='normal'
//                 variant='outlined'
//               />
//               <TextField
//                 id='form-phone'
//                 label='Telefonnummer'
//                 className={classes.textField}
//                 type='tel'
//                 autoComplete='tel'
//                 margin='normal'
//                 variant='outlined'
//               />
//             </form>
//             <div classname={classes.contactOptions}>
//               <CopyToClipboard text='+491635334661'>
//                 <Tooltip
//                   title='Handynummer wurde kopiert! Nun müssen Sie mich nur noch anrufen.'
//                   disableHoverListener
//                 >
//                   <Button
//                     id='contact-call'
//                     onClick={e => this.handleClick(e, 'phone')}
//                     variant='contained'
//                     color='primary'
//                     className={classes.button}
//                   >
//                     <Call />
//                     <span>Rufen Sie mich an</span>
//                   </Button>
//                 </Tooltip>
//               </CopyToClipboard>
//               <a
//                 id='contact-mail'
//                 href={mailHref()}
//                 onClick={e => {
//                   this.handleClick(e, 'mail')
//                 }}
//               >
//                 <Button
//                   variant='contained'
//                   color='primary'
//                   className={classes.button}
//                 >
//                   <MailOutline />
//                   <span>Schreiben Sie mir</span>
//                 </Button>
//               </a>
//               <a
//                 id='contact-whatsapp'
//                 href={whatsappHref(defaultMessage)}
//                 onClick={e => {
//                   this.handleClick(e, 'whatsapp')
//                 }}
//               >
//                 <Button
//                   variant='contained'
//                   color='primary'
//                   className={classes.button}
//                 >
//                   <img src={WhatsappIcon} />
//                   <span>Whatsappen Sie mir</span>
//                 </Button>
//               </a>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     )
//   }
// }

// ContactMe.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(ContactMe)
