import Image from 'next/image'
import Link from 'next/link'
import underlinkObserver from '../fonction/underlinkObserver'
import lazyText from '../fonction/lazyText'
import lazyOpacity from '../fonction/lazyOpacity'
import lazyHeight from '../fonction/lazyHeight'
import style from '../styles/Index.module.css'
import Carrousel from '../components/Carrousel'
import Input from '../components/Input'
import { useState, useEffect } from 'react'
import media from '../json/activite.json'

const Index = ({ scroll, setPosition, screenWidth }) => {

  const [status] = useState(['default', 'loading', 'error', 'valid'])

  const [submitStatus, setSubmitStatus] = useState(status[0])
  const [firstSubmit, setFirstSubmit] = useState(true)

  const [mail, setMail] = useState('')
  const [mailError, setMailError] = useState(false)
  const mailPatern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const [surname, setSurname] = useState('')
  const [surnameError, setSurnameError] = useState(false)
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const namePatern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

  const [message, setMessage] = useState('')

  const [activiteUnderlink, setActiviteUnderlink] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    if (submitStatus === status[0]) {
      let error = false
      setSubmitStatus(status[1])
      setFirstSubmit(false)
      if (!namePatern.test(surname)) {
        setSurnameError(true)
        error = true
      }
      if (!namePatern.test(name)) {
        setNameError(true)
        error = true
      }
      if (!mailPatern.test(mail)) {
        setMailError(true)
        error = true
      }

      if (error) {
        setTimeout(() => setSubmitStatus(status[2]), 1000)
        return
      }
      else {
        try {
          // const response = await fetch('/api/mailing', {
          //   method: 'POST',
          //   headers: { 'Content-type': 'application/json' },
          //   body: JSON.stringify({
          //     surname: surname,
          //     name: name,
          //     mail: mail,
          //     message: message
          //   })
          // })
          // if (response.ok) {
          //   router.reload(window.location.pathname)
          // }
          setTimeout(() => setSubmitStatus(status[3]), 1000)
        } catch (err) {
          setTimeout(() => setSubmitStatus(status[2]), 1000)
          console.error(err)
        }
      }
    }
  }

  useEffect(() => {
    if (submitStatus === status[2]) {
      setTimeout(() => setSubmitStatus(status[0]), 1000)
    }
  }, [submitStatus])

  const getOffsetTop = element => {
    let offsetTop = 0;
    while (element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return offsetTop;
  }

  useEffect(() => {
    if (window.innerWidth >= 1023) {
      document.getElementById(style.savoirFaire).style.transform = `translateY(${(-scroll + getOffsetTop(document.getElementById(style.savoirFaire))) * 0.2}px)`
      document.getElementById(style.qualite).style.transform = `translateY(${(scroll - getOffsetTop(document.getElementById(style.qualite))) * 0.2}px)`
    }
    else {
      document.getElementById(style.savoirFaire).style.transform = 'none'
      document.getElementById(style.qualite).style.transform = 'none'
    }
  }, [scroll])

  useEffect(() => {
    setActiviteUnderlink((window.innerHeight - document.getElementById(style.activite).offsetHeight) / 2 + 1)
    document.querySelectorAll('.underlinkObserver').forEach(e => {
      underlinkObserver(e, setPosition)
    })
    document.querySelectorAll('.lazyText').forEach(e => {
      lazyText(e)
    })
    document.querySelectorAll('.lazyOpacity').forEach(e => {
      lazyOpacity(e)
    })
    document.querySelectorAll('.lazyHeight').forEach(e => {
      lazyHeight(e)
    })
  }, [])

  return (
    <>
      <Image className={style.planete} alt='home-planete' src='/media/photo/home/home-planete.png' width='1448' height='1014' />
      <section id='home'>
        <div id={0} className='underlinkObserver triggerMiddle' />
        <Image id={style.homeBackground} alt='home-background' src='/media/photo/home/home-background.jpg' width='5800' height='4064' />
      </section>
      <div id={style.homeContent}>
        <article id={style.homeText} className='lazyText'>
          <h1 id={style.vii}>
            VII
          </h1>
          <h1 id={style.sync}>
            SYNC
          </h1>
        </article>
      </div>

      <div id={style.fondNoir} />

      <section id={style.presentation}>
        <div id={1} className='underlinkObserver triggerTop' />
        <div id={1} className='underlinkObserver triggerBottom' style={{ transform: `translateY(${-activiteUnderlink}px)` }} />
        <div id='presentation' className='anchor' />
        <article id={style.presentationContent} className='lazyText'>
          <h1>
            PRÉSENTATION
          </h1>
          <p>
            Spécialisé dans la <strong>création de supports de communications</strong>, l'agence <strong>OYX</strong> vous accompagne dans la <strong>réalisation et la promotion de vos projets</strong>.
          </p>
          <p>
            <strong>NOTRE MISSION :</strong><br />
            Définir une stratégie de communication et <strong>créer des outils adaptés</strong>, basées sur l'écoute de vos besoins.
          </p>
          <p>
            L'équipe <strong>OYX</strong> est membre du groupement d'indépendants <strong>«TALIDAD»</strong>, vous offrant ainsi un <strong>panel plus large de compétences</strong> dans la mise en oeuvre de vos idées.
          </p>
          <p>
            Quelle que soit la nature de votre demande : Création d'un logo, d'un site internet, d'une vidéo ou d'une stratégie complète incluant divers domaines d'expertises, <strong>nous faisons de votre satisfaction notre priorité</strong>.
          </p>
          <a href='#activite'>
            <button className={style.button}>
              Découvrez nos domaines d'activités
            </button>
          </a>
        </article>
        <div id={style.planeteAbstraitContainer}>
          <Image id={style.planeteAbstrait} alt='home-terre-abstrait' src='/media/photo/home/home-terre.png' width='6000' height='2962' />
          <div id={style.fondNoirPlanete}>

          </div>
        </div>
        <div id={style.savoirFaireQualite}>
          <article id={style.savoirFaire} className='zoneText lazyOpacity'>
            <h1>
              SAVOIR-FAIRE
            </h1>
            <p>
              Dôtée de plus de 6 ans d'expérience dans le domaine de la communication, notre équipe <strong>développe le potentiel
                des marques et des entreprises</strong> grâce à sa connaissance des tendances créatives actuelles.
              Notre savoir-faire repose sur la <strong>création de moyens de communication cohérents et esthétiques
                en adéquation avec vos objectifs.</strong>
            </p>
          </article>
          <div id={style.separation} className='lazyHeight' />
          <article id={style.qualite} className='zoneText lazyOpacity'>
            <h1>
              QUALITÉ
            </h1>
            <p>
              <strong>De nombreux artistes, marques et entreprises renommés nous ont déjà accordé leur confiance</strong> :
              Arkopharma, Naturland, La maison de champagne Thomas Cheurlin, Maître Savon de Marseille,
              Bioc3, Concept Verre, Seven Driver Riviera, I-SEE Airborn Observatory, Laurence Jenkell,
              Le collectif du Dôme et bien d'autres...
            </p>
          </article>
        </div>
        <a href='#activite' className='buttonfleche buttonSection'>
          <svg width="15" height="15">
            <path d="m5.52 0 7.91 7.5-7.91 7.5-1.95-1.95 5.83-5.55-5.83-5.55z" />
          </svg>
        </a>
      </section>


      <section id={style.activite}>
        <div id={2} className='underlinkObserver triggerMiddle' />
        <div id='activite' className='anchor' />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <article id={style.activiteTitre} className='zoneText lazyText'>
            <h1>
              DOMAINES D'ACTIVITÉS
            </h1>
            <p>
              OYX vous propose un large panel de spécialisations. Nous y maîtrisons au détail l'ensemble des aspects techniques,
              vous garantissant le meilleur en terme de créativité.
            </p>
          </article>
        </div>
        <Carrousel screenWidth={screenWidth} media={media} chemin='/media/video/home/activite/' format='.mp4' />
      </section>



      <section id={style.referenceGraphique}>
        <div id={3} className='underlinkObserver triggerTop' style={{ transform: `translateY(${activiteUnderlink}px)` }} />
        <div id='referenceGraphique' className='anchor' />
        <Image id={style.referenceGraphiqueImg} alt='reference-photo' src='/media/photo/home/reference-photo.jpg' width='3228' height='2896' />
        <article id={style.referenceGraphiqueText} className='zoneText lazyText'>
          <h1>
            RÉFÉRENCES GRAPHIQUE
          </h1>
          <p>
            Création d'identité visuelle, de Logo, conception de charte graphique,
            de packaging, web design & développement, retouche photographique, design et mise en page pour supports
            de communication (flyer, catalogue, carte de visite, annonce presse, plaquette commerciale,
            affiches, étiquettes, etc ...).
          </p>
          <Link href='/design'>
            <button className={`${style.button} ${style.buttonWhite}`}>
              Découvrez nos références graphiques
            </button>
          </Link>
        </article>
      </section>

      <section id={style.referenceVideo}>
        <div id={3} className='underlinkObserver triggerBottom' />
        <video id={style.referenceVideoVideo} autoPlay muted loop='infinite' src={`/media/video/home/reference-video.mp4`} />
        <div id={style.referenceVideoContent}>
          <article id={style.referenceVideoText} className='zoneText lazyText'>
            <h1>
              RÉFÉRENCES VIDÉO
            </h1>
            <p>
              Montage vidéo, Clip musical, Incrustation fond vert, Effets spéciaux (VFX), Motion Design, Sound Design, Traitement audio,
              Réalisation, Scénarisation, etc...
            </p>
            <Link href='/video'>
              <button className={style.button}>
                Découvrez nos références vidéos
              </button>
            </Link>
          </article>
        </div>
      </section>


      <section id='contact'>
        <div id={4} className='underlinkObserver triggerTop' />
        <h1 className='lazyText'>
          CONTACT
        </h1>
        <form id={style.contactForm} className='lazyText' onSubmit={e => handleSubmit(e)}>
          <Input type='text' textLabel='Adresse Mail' textError='Veuillez saisir une adresse mail valide' required={true} htmlfor='mail' valeur={mail} setValeur={setMail} valeurError={mailError} setValeurError={setMailError} errorPatern={mailPatern} firstSubmit={firstSubmit} submitStatus={submitStatus} />
          <Input type='text' textLabel='Nom' textError='Veuillez saisir un nom valide' required={true} htmlfor='surname' valeur={surname} setValeur={setSurname} valeurError={surnameError} setValeurError={setSurnameError} errorPatern={namePatern} firstSubmit={firstSubmit} submitStatus={submitStatus} />
          <Input type='text' textLabel='Prénom' textError='Veuillez saisir un prénom valide' required={true} htmlfor='name' valeur={name} setValeur={setName} valeurError={nameError} setValeurError={setNameError} errorPatern={namePatern} firstSubmit={firstSubmit} submitStatus={submitStatus} />
          <Input type='textarea' textLabel='Message' htmlfor='message' valeur={message} setValeur={setMessage} submitStatus={submitStatus} />
          <p id={style.formP}>Pour toute demande de devis, merci de nous préciser votre demande au maximum. Cela nous permettra de vous donner un prix en adéquation avec le service que nous vous proposerons.</p>
          <button type='submit' disabled={submitStatus !== status[0] ? true : false} className={`${style.button} ${style.buttonWhite} ${style.envoyer} ${submitStatus === status[1] ? style.envoyerLoading : submitStatus === status[2] ? style.envoyerError : submitStatus === status[3] ? style.envoyerValid : undefined}`}>
            <p id={style.textEnvoyer}>Envoyer</p>
            <svg className={`${style.iconEnvoyer} ${submitStatus === status[2] ? style.errorSVG : submitStatus === status[3] ? style.validSVG : style.noSVG}`} viewBox={submitStatus === status[2] ? "0 0 48 48" : "0 0 24 24"}>
              {
                submitStatus === status[2]
                  ?
                  <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" />
                  : submitStatus === status[3] ?
                    <path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z" />
                    : <path />
              }
            </svg>
          </button>
          <p className={`${style.textStatus} ${submitStatus === status[3] ? style.visible : undefined}`}>Votre message a bien été envoyé</p>
        </form>
      </section>
    </>
  )
}

export default Index;
