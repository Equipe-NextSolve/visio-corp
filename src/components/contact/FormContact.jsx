'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    TextField,
    MenuItem,
    Box,
    Button,
    InputAdornment,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { HiOfficeBuilding } from 'react-icons/hi'
import { MdEmail, MdPhone, MdBadge, MdGroups, MdSend } from 'react-icons/md'
import Title from '@/utils/Title'

const C = {
    black:  '#0D0000',
    white:  '#F2F2F2',
    gray:   '#4A4A4A',
    gold:   '#E0AB1A',
    green:  '#79BF0F',
}

const themeInputs = createTheme({
    palette: {
        primary: { main: C.gold },
        background: { paper: C.white, default: C.white },
        text: { primary: C.black, secondary: C.gray },
    },
    components: {
        MuiTextField: {
            defaultProps: { variant: 'outlined', fullWidth: true },
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 6,
                        backgroundColor: '#fafafa',
                        '& fieldset': { borderColor: '#D9D9D9', borderWidth: 1.5 },
                        '&:hover fieldset': { borderColor: C.gold },
                        '&.Mui-focused fieldset': { borderColor: C.gold, borderWidth: 1.5 },
                    },
                    '& .MuiInputLabel-root': { color: C.gray, fontSize: 14 },
                    '& .MuiInputLabel-root.Mui-focused': { color: C.gold },
                    '& .MuiInputBase-input': { fontSize: 14, color: C.black },
                    '& .MuiInputAdornment-root svg': { color: '#bbb', fontSize: 18 },
                    '&:focus-within .MuiInputAdornment-root svg': { color: C.gold },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    color: C.gray,
                    '&:hover': { backgroundColor: '#FFF8E1', color: C.black },
                    '&.Mui-selected': { backgroundColor: '#FFF3CD', color: C.black },
                },
            },
        },
    },
})

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
}

function AnimatedField({ index, children }) {
    return (
        <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={fadeUp}
        >
            {children}
        </motion.div>
    )
}

const employeeRanges = ['1 – 10', '11 – 50', '51 – 200', '201 – 500', '501 – 1000', '1000+']

function formatCNPJ(v) {
    const d = v.replace(/\D/g, '').slice(0, 14)
    return d
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
}

function formatPhone(v) {
    const d = v.replace(/\D/g, '').slice(0, 11)
    if (d.length <= 10) return d.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim()
    return d.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim()
}

export default function FormContact() {
    const [form, setForm] = useState({
        empresa: '', email: '', telefone: '', cnpj: '', funcionarios: '', mensagem: '',
    })

    const handleChange = (field) => (e) => {
        let val = e.target.value
        if (field === 'cnpj') val = formatCNPJ(val)
        if (field === 'telefone') val = formatPhone(val)
        setForm((prev) => ({ ...prev, [field]: val }))
    }

    return (
        <ThemeProvider theme={themeInputs}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 6,
                px: 2,
                backgroundColor: '#F0F2F5',
            }}>

                <Title label="Entre em contato" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ width: '100%', maxWidth: 640, marginTop: 36 }}
                >
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2.5,
                            backgroundColor: '#fafafa',
                            borderRadius: 4,
                            p: { xs: 3, sm: 4 },
                            boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06), 0 20px 48px rgba(0,0,0,0.10)',
                            border: '1px solid rgba(0,0,0,0.06)',
                        }}
                    >
                        <AnimatedField index={0}>
                            <TextField
                                label="Nome da empresa"
                                value={form.empresa}
                                onChange={handleChange('empresa')}
                                autoComplete='off'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><HiOfficeBuilding /></InputAdornment>,
                                }}
                            />
                        </AnimatedField>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
                            <AnimatedField index={1}>
                                <TextField
                                    label="E-mail para contato"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange('email')}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><MdEmail /></InputAdornment>,
                                    }}
                                />
                            </AnimatedField>

                            <AnimatedField index={2}>
                                <TextField
                                    label="Telefone para contato"
                                    value={form.telefone}
                                    onChange={handleChange('telefone')}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><MdPhone /></InputAdornment>,
                                    }}
                                />
                            </AnimatedField>
                        </Box>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
                            <AnimatedField index={3}>
                                <TextField
                                    label="CNPJ"
                                    value={form.cnpj}
                                    onChange={handleChange('cnpj')}
                                    placeholder="00.000.000/0000-00"
                                    autoComplete='off'
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><MdBadge /></InputAdornment>,
                                    }}
                                />
                            </AnimatedField>

                            <AnimatedField index={4}>
                                <TextField
                                    select
                                    label="Qtd. de funcionários"
                                    value={form.funcionarios}
                                    onChange={handleChange('funcionarios')}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><MdGroups /></InputAdornment>,
                                    }}
                                    SelectProps={{
                                        MenuProps: {
                                            PaperProps: {
                                                sx: { borderRadius: 2, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' },
                                            },
                                        },
                                    }}
                                >
                                    {employeeRanges.map((r) => (
                                        <MenuItem key={r} value={r}>{r}</MenuItem>
                                    ))}
                                </TextField>
                            </AnimatedField>
                        </Box>

                        <AnimatedField index={5}>
                            <TextField
                                label="Mensagem"
                                multiline
                                rows={5}
                                value={form.mensagem}
                                onChange={handleChange('mensagem')}
                                placeholder="Descreva como podemos ajudar..."
                            />
                        </AnimatedField>

                        <AnimatedField index={6}>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                                <Button
                                    fullWidth
                                    endIcon={<MdSend />}
                                    sx={{
                                        backgroundColor: C.green,
                                        color: '#fff',
                                        borderRadius: 2,
                                        fontWeight: 600,
                                        fontSize: 15,
                                        letterSpacing: '0.04em',
                                        py: 1.6,
                                        textTransform: 'none',
                                        boxShadow: '0 2px 12px rgba(121,191,15,0.3)',
                                        '&:hover': { backgroundColor: '#6aaa0d', boxShadow: '0 4px 16px rgba(121,191,15,0.4)' },
                                    }}
                                >
                                    Enviar mensagem
                                </Button>
                            </motion.div>
                        </AnimatedField>
                    </Box>
                </motion.div>
            </Box>
        </ThemeProvider>
    )
}