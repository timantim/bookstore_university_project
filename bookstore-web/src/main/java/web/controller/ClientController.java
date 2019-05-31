package web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import core.model.Client;
import core.service.ClientService;
import web.converter.ClientConverter;
import web.dto.ClientDto;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ClientController {
    private static final Logger log = LoggerFactory.getLogger(
            ClientController.class);

    @Autowired
    private ClientService clientService;

    @Autowired
    private ClientConverter clientConverter;


    @RequestMapping(value = "/clients", method = RequestMethod.GET)
    public List<ClientDto> getClients() {
        log.trace("getClients");

        List<Client> clients = clientService.findAll();

        log.trace("getClients: clients={}", clients);

        return new ArrayList<>(clientConverter.convertModelsToDtos(clients));
    }

    @RequestMapping(value = "/clients/{clientId}", method = RequestMethod.PUT)
    public ClientDto updateClient(
            @PathVariable final Long clientId,
            @RequestBody final ClientDto clientDto) {
        log.trace("updateClient: clientId={}, clientDtoMap={}", clientId,
                clientDto);

        Client client = clientService.updateClient(clientId,
                                                       clientDto.getName());

        ClientDto result = clientConverter.convertModelToDto(client);

        log.trace("updateClient: result={}", result);

        return result;
    }

    @RequestMapping(value = "/clients", method = RequestMethod.POST)
    ClientDto saveClient(@RequestBody ClientDto dto) {
        return clientConverter.convertModelToDto(
                clientService.saveClient(
                        clientConverter.convertDtoToModel(dto)
                ));
    }

    @RequestMapping(value = "/clients/{clientId}", method = RequestMethod.DELETE)
    public void deleteClient(@PathVariable final Long clientId) {
        log.trace("deleteClient: clientId={}", clientId);

        clientService.deleteClient(clientId);
    }

}
