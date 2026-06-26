const API_BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2605-ftb-ct-web-pt-mbs";

const state = {
    parties: [],
    selectedParty: null,
}

const getParties = async() => {
    try {
        const res = await fetch(API_BASE + "/" + "events")
        const data = await res.json()
        state.parties = data.data;
        render()
    } catch (error) {
        console.log(error)
    }
}

const getPartyById = async(id) => {
    try {
        const res = await fetch(API_BASE + "/" + "events" + "/" + id)
        const data = await res.json()
        state.selectedParty = data.data
        render()
    } catch (error) {
        console.log(error)
    }
}

const partySelected = () => {
    if (state.selectedParty == null) {
        return `<div class="party-detail"><h3>Select a party from the list to see more info.</h3></div>?`
    } else {
        const formattedDate = new Date(state.selectedParty.date).toISOString().split('T')[0]
        return `<div class="party-detail">
        <h3>${state.selectedParty.name} ${state.selectedParty.id}</h3>
        <p>${formattedDate}</p>
        <p>${state.selectedParty.location}</p>
        <p>${state.selectedParty.description}</p>
        </div>`
    }
}

const showParties = () => {
    return `<div class="party-list"><ul>${state.parties.map((party) => `<li class="${party.id === state.selectedParty?.id ? 'selected' : ''}" onclick=" getPartyById(${party.id})">${party.name}</li>`).join("")}</ul></div>`
}

const render = () => {
    const partiesUi = document.getElementById('app')
    partiesUi.innerHTML = showParties() + partySelected()
}

getParties()