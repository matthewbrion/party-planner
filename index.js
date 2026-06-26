const API_BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";

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
        
    }
}

const getPartyById = async(id) => {
    try {
        const res = await fetch(API_BASE + "/" + "events" + "/" + id)
        const data = await res.json()
        state.selectedParty = data.data
        render()
    } catch (error) {

    }
}

const showParties = () => {
    return state.parties.map((party) => `<li>${party.name}</li>`).join("")
}