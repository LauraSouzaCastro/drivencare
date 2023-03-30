--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: consultations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.consultations (
    id integer NOT NULL,
    user_id integer NOT NULL,
    doctor_horary_id integer NOT NULL,
    held boolean DEFAULT false NOT NULL
);


--
-- Name: consultations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.consultations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: consultations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.consultations_id_seq OWNED BY public.consultations.id;


--
-- Name: doctors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.doctors (
    id integer NOT NULL,
    "CRM" text NOT NULL,
    specialty text NOT NULL,
    location text NOT NULL,
    user_id integer NOT NULL
);


--
-- Name: doctors_horaries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.doctors_horaries (
    id integer NOT NULL,
    doctor_id integer NOT NULL,
    horary_id integer NOT NULL,
    available boolean DEFAULT true NOT NULL
);


--
-- Name: doctors_horaries_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.doctors_horaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: doctors_horaries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.doctors_horaries_id_seq OWNED BY public.doctors_horaries.id;


--
-- Name: doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.doctors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.doctors_id_seq OWNED BY public.doctors.id;


--
-- Name: horaries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.horaries (
    id integer NOT NULL,
    horary timestamp without time zone NOT NULL
);


--
-- Name: horaries_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.horaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: horaries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.horaries_id_seq OWNED BY public.horaries.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    user_id integer NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: consultations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consultations ALTER COLUMN id SET DEFAULT nextval('public.consultations_id_seq'::regclass);


--
-- Name: doctors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors ALTER COLUMN id SET DEFAULT nextval('public.doctors_id_seq'::regclass);


--
-- Name: doctors_horaries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors_horaries ALTER COLUMN id SET DEFAULT nextval('public.doctors_horaries_id_seq'::regclass);


--
-- Name: horaries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.horaries ALTER COLUMN id SET DEFAULT nextval('public.horaries_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: consultations; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: doctors_horaries; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: horaries; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.horaries VALUES (1, '2023-04-01 08:00:00');
INSERT INTO public.horaries VALUES (2, '2023-04-01 09:00:00');
INSERT INTO public.horaries VALUES (3, '2023-04-01 10:00:00');
INSERT INTO public.horaries VALUES (4, '2023-04-01 11:00:00');
INSERT INTO public.horaries VALUES (5, '2023-04-01 13:00:00');
INSERT INTO public.horaries VALUES (6, '2023-04-01 14:00:00');
INSERT INTO public.horaries VALUES (7, '2023-04-01 15:00:00');
INSERT INTO public.horaries VALUES (8, '2023-04-01 16:00:00');
INSERT INTO public.horaries VALUES (9, '2023-04-03 08:00:00');
INSERT INTO public.horaries VALUES (10, '2023-04-03 09:00:00');
INSERT INTO public.horaries VALUES (11, '2023-04-03 10:00:00');
INSERT INTO public.horaries VALUES (12, '2023-04-03 11:00:00');
INSERT INTO public.horaries VALUES (13, '2023-04-03 13:00:00');
INSERT INTO public.horaries VALUES (14, '2023-04-03 14:00:00');
INSERT INTO public.horaries VALUES (15, '2023-04-03 15:00:00');
INSERT INTO public.horaries VALUES (16, '2023-04-03 16:00:00');
INSERT INTO public.horaries VALUES (17, '2023-04-04 08:00:00');
INSERT INTO public.horaries VALUES (18, '2023-04-04 09:00:00');
INSERT INTO public.horaries VALUES (19, '2023-04-04 10:00:00');
INSERT INTO public.horaries VALUES (20, '2023-04-04 11:00:00');
INSERT INTO public.horaries VALUES (21, '2023-04-04 13:00:00');
INSERT INTO public.horaries VALUES (22, '2023-04-04 14:00:00');
INSERT INTO public.horaries VALUES (23, '2023-04-04 15:00:00');
INSERT INTO public.horaries VALUES (24, '2023-04-04 16:00:00');
INSERT INTO public.horaries VALUES (25, '2023-04-05 08:00:00');
INSERT INTO public.horaries VALUES (26, '2023-04-05 09:00:00');
INSERT INTO public.horaries VALUES (27, '2023-04-05 10:00:00');
INSERT INTO public.horaries VALUES (28, '2023-04-05 11:00:00');
INSERT INTO public.horaries VALUES (29, '2023-04-05 13:00:00');
INSERT INTO public.horaries VALUES (30, '2023-04-05 14:00:00');
INSERT INTO public.horaries VALUES (31, '2023-04-05 15:00:00');
INSERT INTO public.horaries VALUES (32, '2023-04-05 16:00:00');
INSERT INTO public.horaries VALUES (33, '2023-04-06 08:00:00');
INSERT INTO public.horaries VALUES (34, '2023-04-06 09:00:00');
INSERT INTO public.horaries VALUES (35, '2023-04-06 10:00:00');
INSERT INTO public.horaries VALUES (36, '2023-04-06 11:00:00');
INSERT INTO public.horaries VALUES (37, '2023-04-06 13:00:00');
INSERT INTO public.horaries VALUES (38, '2023-04-06 14:00:00');
INSERT INTO public.horaries VALUES (39, '2023-04-06 15:00:00');
INSERT INTO public.horaries VALUES (40, '2023-04-06 16:00:00');
INSERT INTO public.horaries VALUES (41, '2023-04-07 08:00:00');
INSERT INTO public.horaries VALUES (42, '2023-04-07 09:00:00');
INSERT INTO public.horaries VALUES (43, '2023-04-07 10:00:00');
INSERT INTO public.horaries VALUES (44, '2023-04-07 11:00:00');
INSERT INTO public.horaries VALUES (45, '2023-04-07 13:00:00');
INSERT INTO public.horaries VALUES (46, '2023-04-07 14:00:00');
INSERT INTO public.horaries VALUES (47, '2023-04-07 15:00:00');
INSERT INTO public.horaries VALUES (48, '2023-04-07 16:00:00');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (2, 'c5cb7fb0-fb69-48b9-a70e-7ac0ff29ea4a', 1);
INSERT INTO public.sessions VALUES (3, '9ddf4f4e-3f10-4ef3-9ae1-d05b1d34eeb4', 1);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'laura', 'laura@gmail.com', '$2b$10$btIR./cxO6NjS9JygLraKOW3fKIh9.Hh/OsVGaaEj.FadAxiyqqyS');


--
-- Name: consultations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.consultations_id_seq', 1, false);


--
-- Name: doctors_horaries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.doctors_horaries_id_seq', 1, false);


--
-- Name: doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.doctors_id_seq', 1, false);


--
-- Name: horaries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.horaries_id_seq', 48, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: consultations consultations_doctor_horary_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consultations
    ADD CONSTRAINT consultations_doctor_horary_id_key UNIQUE (doctor_horary_id);


--
-- Name: consultations consultations_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consultations
    ADD CONSTRAINT consultations_pk PRIMARY KEY (id);


--
-- Name: doctors doctors_CRM_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT "doctors_CRM_key" UNIQUE ("CRM");


--
-- Name: doctors_horaries doctors_horaries_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors_horaries
    ADD CONSTRAINT doctors_horaries_pk PRIMARY KEY (id);


--
-- Name: doctors doctors_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pk PRIMARY KEY (id);


--
-- Name: horaries horaries_horary_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.horaries
    ADD CONSTRAINT horaries_horary_key UNIQUE (horary);


--
-- Name: horaries horaries_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.horaries
    ADD CONSTRAINT horaries_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: consultations consultations_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consultations
    ADD CONSTRAINT consultations_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: consultations consultations_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consultations
    ADD CONSTRAINT consultations_fk1 FOREIGN KEY (doctor_horary_id) REFERENCES public.doctors_horaries(id);


--
-- Name: doctors doctors_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: doctors_horaries doctors_horaries_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors_horaries
    ADD CONSTRAINT doctors_horaries_fk0 FOREIGN KEY (doctor_id) REFERENCES public.doctors(id);


--
-- Name: doctors_horaries doctors_horaries_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors_horaries
    ADD CONSTRAINT doctors_horaries_fk1 FOREIGN KEY (horary_id) REFERENCES public.horaries(id);


--
-- Name: sessions sessions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

