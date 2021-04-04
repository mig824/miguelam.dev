import React, { FC, useEffect, useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

import EmailIcon from '@utils/icons/email.svg'
import GithubIcon from '@utils/icons/github.svg'
import LinkedinIcon from '@utils/icons/linkedin.svg'
import {
  Section,
  Form,
  IconsContainer,
  FormHeader,
} from '@components/contact/contact.css'

interface MetadataProps {
  author: string
  pathname: string
  linkedin: string
  github: string
}

export const Contact: FC<{ metadata: MetadataProps }> = ({ metadata }) => {
  const [active, toggleActive] = useState(false)
  const [{ submitting, succeeded, errors }, handleSubmit] = useForm('mlearpze')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formRef.current) {
      formRef.current.style.maxHeight = active
        ? `${formRef.current.scrollHeight}px`
        : `0px`
    }
  }, [active, formRef])

  return (
    <Section>
      <FormHeader>
        <h2>Wanna chat about somethin' ?</h2>
        <p>Use one of these fancy buttons to connect</p>
        <IconsContainer>
          <button
            onClick={() => toggleActive(!active)}
            title="Email"
            disabled={succeeded}
          >
            <EmailIcon className="email" alt="Email Icon" />
          </button>
          <a
            href={metadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            title="Linkedin"
          >
            <LinkedinIcon className="linkedin" alt="Linkedin logo" />
          </a>
          <a
            href={metadata.github}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            title="Github"
          >
            <GithubIcon className="github" alt="Github logo" />
          </a>
        </IconsContainer>
      </FormHeader>
      {succeeded ? (
        <p>I'll be in touch! 📮 ✉💨</p>
      ) : (
        <Form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
          <>
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" id="Name" required />
            <ValidationError field="Name" prefix="Name" errors={errors} />
          </>
          <>
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="Email" required />
            <ValidationError field="Email" prefix="Email" errors={errors} />
          </>
          <>
            <label htmlFor="What's Up?">What's Up?</label>
            <textarea name="Message" id="What's Up?" rows={10} required />
          </>
          <button type="submit" disabled={submitting}>
            SEND
          </button>
        </Form>
      )}
    </Section>
  )
}
