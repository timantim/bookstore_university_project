package core.service;

import core.model.Client;

import java.util.List;

public interface ClientService {
    List<Client> findAll();

    Client updateClient(Long clientId, String name);

    Client saveClient(Client client);

    void deleteClient(Long clientId);

}
