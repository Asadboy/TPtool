var clients = [
    { name: "ADT Fire & Security", number: "0344 322 1608" },
    { name: "Allianz Insurance", number: "0344 322 1608" },
    { name: "AIG Insurance", number: "0344 322 1608" },
    { name: "Asda", number: "0344 243 8862" },
    { name: "AXA Insurance", number: "0344 243 8630" },
    { name: "Biffa Waste", number: "0344 322 1608" },
    { name: "Century Underwriting", number: "0344 243 8838" },
    { name: "Co Op", number: "0344 243 8542" },
    { name: "Hadleigh Insurance", number: "0344 322 1608" },
    { name: "Hastings Insurance", number: "0344 243 8915" },
    { name: "Marks & Spencer", number: "0344 322 1608" },
    { name: "NCP", number: "0344 322 1608" },
    { name: "Pen Underwriting", number: "0344 322 1608" },
    { name: "Protector Insurance", number: "0344 243 8827" },
    { name: "QBE Insurance", number: "01484 912 005" },
    { name: "Sheffield Insulation Group", number: "0344 322 1608" },
    { name: "Yodel", number: "0344 322 1608" },
    { name: "Zurich Insurance", number: "0344 322 1608" }
        // Add more clients as needed
    ];

function generateMissedCallSms() {
    var firstName = document.getElementById('firstName').value;
    var clientName = document.getElementById('client').value;
    var reference = document.getElementById('reference').value;
    var incidentDate = document.getElementById('incidentDate').value;

    // Convert date to UK format (dd/mm/yyyy)
    var parts = incidentDate.split("-");
    var formattedDate = parts[2] + "/" + parts[1] + "/" + parts[0];

    var selectedClient = clients.find(function (client) {
        return client.name === clientName;
    });

    var insurerName = selectedClient ? selectedClient.name : "[Insurer]";
    var contactNumber = selectedClient ? selectedClient.number : "[Contact Number]";

    var smsTemplate = 
        "Hi " + firstName + ",\n\n" +
        "You have missed a call from FMG Incident Management on behalf of " + insurerName + ". We have attempted to contact you to\n" +
        "arrange repair and a replacement vehicle following the incident you were involved in on " + formattedDate + ".\n" +
        "Please return the call at your earliest convenience on " + contactNumber + " or email TPContact@fmg.co.uk, quoting our\n" +
        "reference " + reference + ". You can also find out further information on our website - www.fmg.co.uk/Third-Party\n\n" +
        "Our opening hours are: Monday - Friday 8:30am - 8pm. Saturday 9:30am - 1:30pm.\n\n" +
        "FMG";

    document.getElementById('smsTemplate').value = smsTemplate;
}


function generatePreCallSms() {
    var firstName = document.getElementById('firstName').value;
    var clientName = document.getElementById('client').value;
    var reference = document.getElementById('reference').value;
    var incidentDate = document.getElementById('incidentDate').value;

    // Convert date to UK format (dd/mm/yyyy)
    var parts = incidentDate.split("-");
    var formattedDate = parts[2] + "/" + parts[1] + "/" + parts[0];

    var selectedClient = clients.find(function (client) {
        return client.name === clientName;
    });

    var insurerName = selectedClient ? selectedClient.name : "[Insurer]";
    var contactNumber = selectedClient ? selectedClient.number : "[Contact Number]";
    var hireRate = selectedClient ? selectedClient.hireRate : "[HIRE RATE]";

    var smsTemplate = 
        "Hi " + firstName + ",\n\n" +
        "We have been instructed by " + insurerName + "  the insurers of the other vehicle involved in the incident on " + formattedDate + ".\n" +
        "We will be calling you to assist in repairing your vehicle and providing a hire vehicle if necessary. This service will be provided at no " +
        "cost to yourself and will be paid for by " + insurerName + ". The replacement vehicle, whilst free to yourself, will be billed to " +
        insurerName + " at a daily rate of [Insert Hire Rate] plus VAT. The vehicle provided to you will be of a similar make and model to your own.\n\n" +
        "If arrangements have already been made through your own insurer we can still assist, however you should provide a copy of this " +
        "message to the company providing you with a hire vehicle.\n\n" +
        "You can also find out further information on our website - www.fmg.co.uk/Third-Party\n\n" +
        "Alternatively, please contact us on " + contactNumber + " or email TPcontact@fmg.co.uk, quoting our reference " + reference + ".\n\n" +
        "Our opening hours are Monday - Friday 8:30am - 8pm. Saturday 9:30am - 1:30pm.\n\n" +
        "FMG";

    document.getElementById('smsTemplate').value = smsTemplate;
}


function generateUnableToContactSms() {
    var firstName = document.getElementById('firstName').value;
    var clientName = document.getElementById('client').value;
    var reference = document.getElementById('reference').value;

    var selectedClient = clients.find(function (client) {
        return client.name === clientName;
    });

    var insurerName = selectedClient ? selectedClient.name : "[Insurer]";
    var contactNumber = selectedClient ? selectedClient.number : "[Contact Number]";

    var smsTemplate = 
        "Hi " + firstName + ",\n\n" +
        "You have missed a call from FMG Incident Management on behalf of " + insurerName + ". We are closing down the claim as we " +
        "have not been able to contact you. Should you wish to accept our services at another time please contact " + contactNumber + " " +
        "quoting our reference " + reference + " and we will discuss re-opening the claim.\n\n" +
        "Our opening hours are: Monday - Friday 8:30am - 8pm. Saturday 9:30am - 1:30pm.\n\n" +
        "FMG\nhttps://uk.trustpilot.com/review/fmg.co.uk";

    document.getElementById('smsTemplate').value = smsTemplate;
}


function generateCOR() {
    var firstName = document.getElementById('firstName').value;
    var clientName = document.getElementById('client').value;
    var reference = document.getElementById('reference').value;

    var selectedClient = clients.find(function (client) {
        return client.name === clientName;
    });

    var insurerName = selectedClient ? selectedClient.name : "[Insurer]";
    var contactNumber = selectedClient ? selectedClient.number : "[Contact Number]";

    var smsTemplate = 
        "Hi " + firstName + ",\n\n" +
        "As you have chosen to use your own repairer, please send us an estimate which should include a full break down " +
        "of the costs, along with supporting images to TPestimates@fmg.co.uk including your reference number. If your " +
        "repairer is on the Audatex network, please ask them to submit the estimate to code FMGS.\n\n" +
        "Supporting images must include: Front and rear image of the vehicle including the registration number, image of " +
        "the mileage, image of the vehicle identification number (VIN), images of the damage to the vehicle.\n\n" +
        "Please note that FMG will only authorise repairs to your chosen body-shop and pay them directly once the work " +
        "has been completed.\n\n" +
        "Our payment terms are 60 Days from end of the month by BACS.\n\n" +
        "You will not be reimbursed if you have had the repairs completed prior to FMG's involvement.\n\n" +
        "Please contact us on " + contactNumber + " quoting your reference number " + reference + " if you have any queries.";

    document.getElementById('smsTemplate').value = smsTemplate;
}


function generateCOS() {
    var firstName = document.getElementById('firstName').value;
    var clientName = document.getElementById('client').value;
    var reference = document.getElementById('reference').value;
    var incidentDate = document.getElementById('incidentDate').value;

    // Convert date to UK format (dd/mm/yyyy)
    var parts = incidentDate.split("-");
    var formattedDate = parts[2] + "/" + parts[1] + "/" + parts[0];

    var selectedClient = clients.find(function (client) {
        return client.name === clientName;
    });

    var insurerName = selectedClient ? selectedClient.name : "[Insurer]";
    var contactNumber = selectedClient ? selectedClient.number : "[Contact Number]";

    var smsTemplate = 
        "Thank you for accepting the use of our services.\n\n" +
        "Vehicle repair - if you have chosen to use one of our network repairers, we will allocate a repairer who will be in " +
        "contact with you directly to arrange an assessment or collection of your vehicle. Once an assessment has been " +
        "carried out and authorised by our engineers, the repairer will arrange a booking in date with you directly.\n\n" +
        "Replacement vehicle - if we are providing you with a replacement vehicle this will be provided by one of our hire " +
        "partners (Auxillis, Enterprise, Europcar or Magna). Depending on the provider, there may be a small security " +
        "deposit required which will be reimbursed to you on return of the vehicle. We will book your hire vehicle once a " +
        "booking in date has been confirmed by the repairer.\n\n" +
        "IMPORTANT INFORMATION REGARDING THE MOTOR INSURANCE INDUSTRY\n" +
        "There are currently nationwide industry challenges impacting the repair and replacement vehicle sectors, whereby parts supply, " +
        "repairer capacity and vehicle supply are being affected:\n" +
        "The continued global shortage of semiconductors made worse by the fallout from the Covid pandemic and the Russian invasion " +
        "of Ukraine. The average car can contain up to 3,000 semiconductor chips and their shortage impacts on vehicle repair times.\n" +
        "Rising used car prices reflecting, in part, longer new car delivery times. Average used car prices rose by 30% in the last year.\n" +
        "More expensive repairs, coupled with rises in the costs of raw materials such as paint, as increasingly sophisticated vehicles " +
        "are more costly to repair.\n" +
        "A shortage of skilled labour in the vehicle repair sector.\n" +
        "Delays in getting some spare parts are in some cases increasing vehicle repair times.\n\n" +
        "Due to these unprecedented factors and despite our continued effort to service all our customers to the highest possible standard, " +
        "we regret that you may experience some delays throughout the claims process.\n\n" +
        "FMG, our partners, repair network and suppliers remain committed to providing an industry leading service during this time.\n\n" +
        "Please contact us quoting your reference number " + reference + " on " + contactNumber +  " if you have any queries.\n\n" +
        "FMG";

    document.getElementById('smsTemplate').value = smsTemplate;
}


window.addEventListener('DOMContentLoaded', function () {
    var clientDropdown = document.getElementById('client');

    clients.forEach(function (client) {
        var option = document.createElement('option');
        option.value = client.name;
        option.textContent = client.name;
        clientDropdown.appendChild(option);
    });
});