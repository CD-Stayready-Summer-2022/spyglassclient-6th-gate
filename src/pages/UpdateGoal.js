import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {useNavigate } from "react-router-dom";
import { goals } from "../TestData.js";

const theme = createTheme();

export const UpdateGoal = () => {
  const {id} = useParams();
  const goalToUpdate = goals.find(element => element.id === id);
  const index = goals.indexOf(goalToUpdate);
  const navigate = useNavigate();
  const [goalName, setGoalName] = useState('');
  const [targetDollarAmount, setTargetDollarAmount] = useState('');
  const [currentDollarAmount, setCurrentDollarAmount] = useState('');
  const [description, setDescription] = useState('');

  useEffect(()=> {
    setGoalName(goalToUpdate.goalName);
    setTargetDollarAmount(goalToUpdate.targetDollarAmount);
    setCurrentDollarAmount(goalToUpdate.currentDollarAmount);
    setDescription(goalToUpdate.description);
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const goal = {
        id: goals.length,
        goalName: data.get('goalName'),
        targetDollarAmount: data.get('targetDollarAmount'),
        currentDollarAmount: data.get('currentDollarAmount'),
        creationDate: Date.now(),
        targetDate: Date.now(),
        description: data.get("description"),
        steps: []
      };

    goals[index] = goal;
    navigate("/");

  };

    return(
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Update
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="goalName"
                  name="goalName"
                  required
                  fullWidth
                  value={goalName}
                  onChange= {(e) => setGoalName(e.target.value)}
                  id="goalName"
                  label="Goal Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  value={targetDollarAmount}
                  onChange= {(e) => setTargetDollarAmount(e.target.value)}
                  label="Target Dollar Amount"
                  name="targetDollarAmount"
                  autoComplete="target-dollar-amount"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="currentDollarAmount"
                  value={currentDollarAmount}
                  onChange= {(e) => setCurrentDollarAmount(e.target.value)}
                  label="Current Dollar Amount"
                  name="currentDollarAmount"
                  autoComplete="current-dollar-amount"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  value={description}
                  onChange= {(e) => setDescription(e.target.value)}
                  label="Description"
                  name="description"
                  autoComplete="description"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Save
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
  };