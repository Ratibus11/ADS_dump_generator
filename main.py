def tri(tableau_A, tableau_B):
    for i in range(len(tableau_A)):
        valeur_min = i
        for j in range(i + 1, len(tableau_A)):
            if tableau_A[j] < tableau_A[valeur_min]:
                valeur_min = j

        tableau_A[i], tableau_A[valeur_min] = tableau_A[valeur_min], tableau_A[i]
        if tableau_B != None:
            tableau_B[i], tableau_B[valeur_min] = tableau_B[valeur_min], tableau_B[i]

    return tableau_A, tableau_B


def lecture(nom):
    fichier = open("source/excel/" + str(nom) + ".txt")
    texte = fichier.readlines()
    fichier.close()

    for i in range(len(texte)):
        if texte[i][-1:] == "\n":
            texte[i] = texte[i][:-1]
    return texte


def objet():
    global dico_objet

    dico_objet = []

    texte = lecture("Objets")

    for i in range(len(texte)):
        if not texte[i] in dico_objet:
            dico_objet.append(texte[i])
    dico_objet.sort()
    sortie = open("sortie/sortie-Objet.sql", "w")
    sortie.write("INSERT INTO `Objet` (idObjet, nomObjet) VALUES\n")
    for i in dico_objet:
        if i != dico_objet[-1]:
            sortie.write('\t(' + str(dico_objet.index(i)+1) + ', "' + str(i) + '"),\n')
        else:
            sortie.write('\t(' + str(dico_objet.index(i)+1) + ', "' + str(i) + '");')
    sortie.close()


def artisan():
    global dico_artisan

    dico_artisan = []

    texte = lecture("Artisan")
    compteur = 1

    for i in range(len(texte)):
        if texte[i].count("&") != 0:
            texte.append(texte[i][texte[i].index("&") + 2:])
            texte[i] = texte[i][:texte[i].index("&") - 1]
    for i in range(len(texte)):
        if not texte[i] in dico_artisan:
            dico_artisan.append(texte[i])
    dico_artisan.sort()
    sortie = open("sortie/sortie-Artisan.sql", "w")
    sortie.write("INSERT INTO `Artisan` (nomArtisan) VALUES\n")
    for i in dico_artisan:
        if i != dico_artisan[-1]:
            sortie.write('\t("' + str(i) + '"),\n')
        else:
            sortie.write('\t("' + str(i) + '");')
    sortie.close()


def decoration():
    global dico_decoration

    dico_decoration = []

    texte = lecture("Décoration")
    compteur = 1

    for i in range(len(texte)):
        if texte[i].count("&") != 0:
            texte.append(texte[i][texte[i].index("&") + 2:])
            texte[i] = texte[i][:texte[i].index("&") - 1]
    texte = [i for i in texte if i]
    for i in range(len(texte)):
        if not texte[i] in dico_decoration:
            dico_decoration.append(texte[i])
    dico_decoration.sort()
    sortie = open("sortie/sortie-Décoration.sql", "w")
    sortie.write("INSERT INTO `Decoration` (nomDecoration, idDieu) VALUES\n")
    for i in range(len(dico_decoration)):
        dieu = dico_decoration[i].split(" ")[-1]
        if "'" in dieu:
            dieu = dieu[dieu.index("'") + 1:]
            dieu = dico_dieu.get(dieu)
        else:
            dieu = dico_dieu.get(dieu)
        if dico_decoration[i] != dico_decoration[-1]:
            sortie.write('\t("' + str(dico_decoration[i]) + '", ' + str(dieu) + '),\n')
        else:
            sortie.write('\t("' + str(dico_decoration[i]) + '", ' + str(dieu) + ');')
    sortie.close()


def pouvoir():
    global dico_pouvoir

    dico_pouvoir = []

    texte = lecture("Pouvoir")
    compteur = 1

    for i in range(len(texte)):
        if texte[i].count("&") != 0:
            texte.append(texte[i][texte[i].index("&") + 2:])
            texte[i] = texte[i][:texte[i].index("&") - 1]
    texte = [i for i in texte if i]
    for i in range(len(texte)):
        if not texte[i] in dico_pouvoir:
            dico_pouvoir.append(texte[i])
    dico_pouvoir.sort()
    sortie = open("sortie/sortie-Pouvoir.sql", "w")
    sortie.write("INSERT INTO `Pouvoir` (nomPouvoir, idDieu) VALUES\n")
    for i in range(len(dico_pouvoir)):
        dieu = dico_pouvoir[i].split(" ")[-1]
        if "'" in dieu :
            dieu = dieu[dieu.index("'") + 1:]
            dieu = dico_dieu.get(dieu)
        else  :
            dieu = dico_dieu.get(dieu)
        if dieu == None :
            dieu = "NULL"
        if dico_pouvoir[i] != dico_pouvoir[-1]:
            sortie.write('\t("' + str(dico_pouvoir[i]) + '", ' + str(dieu) + '),\n')
        else:
            sortie.write('\t("' + str(dico_pouvoir[i]) + '", ' + str(dieu) + ');')
    sortie.close()


def divinite():
    global dico_demidieu
    global dico_dieu

    dico_dieu = {}
    dico_demidieu = []
    dico_demidieu_dieu = []
    compteurdieu = 1

    texte = lecture("Divinité")

    for i in range(len(texte)):
        if not texte[i][texte[i].index("\t")+1:] in dico_dieu:
            dico_dieu[texte[i][texte[i].index("\t")+1:]] = compteurdieu
            compteurdieu += 1
        if not texte[i][:texte[i].index("\t")] in dico_demidieu:
            dico_demidieu.append(texte[i][:texte[i].index("\t")])
            dico_demidieu_dieu.append(dico_dieu.get(texte[i][texte[i].index("\t")+1:]))

    dico_demidieu, dico_demidieu_dieu = tri(dico_demidieu, dico_demidieu_dieu)
    sortie = open("sortie/sortie-Divinité.sql", "w")
    sortie.write("INSERT INTO `Divinite` (nomdieu, iddieu) VALUES\n")

    for i in dico_dieu:
        if i != list(dico_dieu.keys())[-1]:
            sortie.write('\t("' + str(i) + '", ' + str(dico_dieu.get(i)) + '),\n')
        else:
            sortie.write('\t("' + str(i) + '", ' + str(dico_dieu.get(i)) + ');')
    sortie.close()

    sortie = open("sortie/sortie-DemiDieu.sql", "w")
    sortie.write("INSERT INTO `Demi_Dieu` (nomdemidieu, iddieu) VALUES\n")

    for i in dico_demidieu:
        if i != dico_demidieu[-1]:
            sortie.write('\t("' + str(i) + '", ' + str(int(dico_demidieu_dieu[dico_demidieu.index(i)])) + '),\n')
        else:
            sortie.write('\t("' + str(i) + '", ' + str(int(dico_demidieu_dieu[dico_demidieu.index(i)])) + ');')
    sortie.close()


def province():
    global dico_secteur

    dico_province_temp = {}
    dico_province = {}
    dico_cite = []
    dico_cite_province = []
    compteurProvince = 1
    dico_secteur = {}

    texte = lecture("Province")

    for i in range(len(texte)):
        if "\t" == texte[i][-1:]:
            if not texte[i][:-1] in dico_province_temp:
                dico_province_temp[texte[i][:-1]] = compteurProvince
                compteurProvince += 1
        else:
            if not texte[i][:texte[i].index("\t")] in dico_province_temp:
                dico_province_temp[texte[i][:texte[i].index("\t")]] = compteurProvince
                compteurProvince += 1
            if not texte[i][texte[i].index("\t") + 1:] in dico_cite:
                dico_cite.append(texte[i][texte[i].index("\t") + 1:])
                dico_cite_province.append(dico_province_temp.get(texte[i][:texte[i].index("\t")]))
    for i in sorted(dico_province_temp.keys()):
        dico_province[i] = dico_province_temp.get(i)

    dico_cite, dico_cite_province = tri(dico_cite, dico_cite_province)

    sortie = open("sortie/sortie-Province.sql", "w")
    sortie.write("INSERT INTO `Province` (nomProvince, idProvince) VALUES\n")

    for i in dico_province:
        if i != list(dico_province.keys())[-1]:
            sortie.write('\t("' + str(i) + '", ' + str(dico_province.get(i)) + '),\n')
        else:
            sortie.write('\t("' + str(i) + '", ' + str(dico_province.get(i)) + ');')
    sortie.close()

    sortie = open("sortie/sortie-Cité.sql", "w")
    sortie.write("INSERT INTO `Cite` (nomCite, idProvince) VALUES\n")

    for i in dico_cite:
        if i != dico_cite[-1]:
            sortie.write('\t("' + str(i) + '", ' + str(int(dico_cite_province[dico_cite.index(i)])) + '),\n')
        else:
            sortie.write('\t("' + str(i) + '", ' + str(int(dico_cite_province[dico_cite.index(i)])) + ');')
    sortie.close()

    sortie = open("sortie/sortie-Secteur.sql", "w")
    sortie.write("INSERT INTO `Secteur` (idProvince, idCite) VALUES\n")
    for i in range(len(texte)):
        if texte[i] != texte[-1]:
            if "\t" == texte[i][-1:]:
                sortie.write('\t(' + str(dico_province.get(texte[i][:-1])) + ', NULL),\n')
                dico_secteur[texte[i][:-1]] = i+1
            else:
                sortie.write('\t(NULL, ' + str(int(dico_cite.index(texte[i][texte[i].index("\t") + 1:])) + 1) + '),\n')
                dico_secteur[" - ".join(texte[i].split("\t"))] = i+1
        else:
            if "\t" == texte[i][-1:]:
                sortie.write('\t(' + str(dico_province.get(texte[i][:-1])) + ', NULL);')
                dico_secteur[texte[i][:-1]] = i + 1
            else:
                sortie.write('\t(NULL, ' + str(int(dico_cite.index(texte[i][texte[i].index("\t") + 1:])) + 1) + ');')
                dico_secteur[" - ".join(texte[i].split("\t"))] = i + 1


def guerre():
    texte = lecture("Guerre")
    sortie = open("sortie/sortie-Guerre.sql", "w")
    sortie.write("INSERT INTO `Guerre` (idSecteur, numeroAnnee, idDemiDieu) VALUES\n")

    for i in range(len(texte)):
        secteur = dico_secteur.get(texte[i][:texte[i].index("\t")])
        texte[i] = texte[i][texte[i].index("\t")+1:]
        while texte[i] != "" :
            demidieu = "NULL"
            if texte[i].count("(") == 0 :
                annee = texte[i][:texte[i].index(";")]
            else :
                if texte[i].index("(") < texte[i].index(";"):
                    annee = texte[i][:texte[i].index(" ")]
                    demidieu = texte[i][texte[i].index("(")+1:texte[i].index(")")]
                else:
                    annee = texte[i][:texte[i].index(";")]
            texte[i] = texte[i][texte[i].index(";")+1:]
            if i == len(texte)-1 and texte[i] == "":
                if demidieu == "NULL" :
                    sortie.write('\t(' + str(secteur) + ', ' + str(annee) + ', NULL);')
                else :
                    sortie.write('\t(' + str(secteur) + ', ' + str(annee) + ', ' + str(int(dico_demidieu.index(demidieu))+1) + ');')
            else :
                if demidieu == "NULL" :
                    sortie.write('\t(' + str(secteur) + ', ' + str(annee) + ', NULL),\n')
                else :
                    sortie.write('\t(' + str(secteur) + ', ' + str(annee) + ', ' + str(int(dico_demidieu.index(demidieu))+1) + '),\n')
    sortie.close()


def mois() :
    global dico_mois

    dico_mois = {}
    compteur = 1

    texte = lecture("Mois")
    sortie = open("sortie/sortie-Mois.sql", "w")
    sortie.write("INSERT INTO `Mois` (nomMois, idDieu) VALUES\n")
    for ligne in texte :
        dieu = dico_dieu.get(ligne[ligne.index("\t")+1:])
        if ligne != texte[-1] :

            sortie.write('\t("' + str(ligne[:ligne.index("\t")]) + '", ' + str(dieu) + '),\n')
        else :
            sortie.write('\t("' + str(ligne[:ligne.index("\t")]) + '", ' + str(dieu) + ');')
        dico_mois[ligne[:ligne.index("\t")]] = compteur
        compteur += 1
    sortie.close()


def commande(repetition):
    texte = lecture("Commande")

    sortie_commande = open("sortie/sortie-Commande.sql", "w")
    sortie_decor = open("sortie/sortie-Décorer.sql", "w")
    sortie_fabriquer = open("sortie/sortie-Fabriquer.sql", "w")
    sortie_cout = open("sortie/sortie-Coût.sql", "w")

    if repetition == None:
        sortie_commande.write("INSERT INTO `Commande` (numeroJour, idMois, numeroAnnee, idObjet, idPouvoir, idSecteur, idDemiDieu, quantite) VALUES\n")
        sortie_decor.write("INSERT INTO `Decorer` (idCommande, idDecoration) VALUES\n")
        sortie_fabriquer.write("INSERT INTO `Realiser` (idCommande, idArtisan) VALUES\n")
        sortie_cout.write("INSERT INTO `Couter` (idCommande, uniteMonnaie, quantiteMonnaie) VALUES\n")
        repetition = 0.1
    for i in range(len(texte)):
        if (i+1)%repetition == 0 :
            sortie_commande.write("INSERT INTO `Commande` (numeroJour, idMois, numeroAnnee, idObjet, idPouvoir, idSecteur, idDemiDieu, quantite) VALUES\n")
            sortie_decor.write("INSERT INTO `Decorer` (idCommande, idDecoration) VALUES\n")
            sortie_fabriquer.write("INSERT INTO `Realiser` (idCommande, idArtisan) VALUES\n")
            sortie_cout.write("INSERT INTO `Couter` (idCommande, uniteMonnaie, quantiteMonnaie) VALUES\n")
        annee = int(texte[i][:3])
        texte[i] = texte[i][5:]

        mois = dico_mois.get(texte[i][:texte[i].index(" ")])
        texte[i] = texte[i][texte[i].index(" ")+1:]

        jour = int(texte[i][:texte[i].index("\t")])
        texte[i] = texte[i][texte[i].index("\t")+1:]

        objet = dico_objet.index(texte[i][:texte[i].index("\t")])
        texte[i] = texte[i][texte[i].index("\t") + 1:]

        artisan = texte[i][:texte[i].index("\t")]
        if artisan.count("&") != 0 :
            artisan = artisan.split(" & ")
            for j in range(len(artisan)):
                if i == len(texte)-1 or (j == len(artisan)-1 and (i+1)%repetition == 0):
                    sortie_fabriquer.write("\t(" + str(i+1) + ', ' + str(int(dico_artisan.index(artisan[j])+1)) + ');\n')
                else:
                    sortie_fabriquer.write("\t(" + str(i+1) + ', ' + str(int(dico_artisan.index(artisan[j])+1)) + '),\n')
        else :
            if (i+1)%repetition == 0 or i == len(texte) - 1:
                sortie_fabriquer.write("\t(" + str(i + 1) + ', ' + str(int(dico_artisan.index(artisan) + 1)) + ');\n')
            else:
                sortie_fabriquer.write("\t(" + str(i + 1) + ', ' + str(int(dico_artisan.index(artisan) + 1)) + '),\n')
        texte[i] = texte[i][texte[i].index("\t") + 1:]

        if texte[i][:texte[i].index("\t")] == "" :
            pouvoir = "NULL"
        else :
            pouvoir = int(dico_pouvoir.index(texte[i][:texte[i].index("\t")])+1)
        texte[i] = texte[i][texte[i].index("\t") + 1:]

        decoration = texte[i][:texte[i].index("\t")]
        if decoration == "":
            decoration = "NULL"
        else:
            if decoration.count("&") != 0:
                decoration = decoration.split(" & ")
                for j in range(len(decoration)):
                    if i == len(texte) - 1 or (j == len(decoration)-1 and (i+1)%repetition == 0):
                        sortie_decor.write("\t(" + str(i + 1) + ', ' + str(int(dico_decoration.index(decoration[j]) + 1)) + ');\n')
                    else:
                        sortie_decor.write("\t(" + str(i + 1) + ', ' + str(int(dico_decoration.index(decoration[j]) + 1)) + '),\n')
            else:
                if i == len(texte) - 1 or (i+1)%repetition == 0:
                    sortie_decor.write("\t(" + str(i + 1) + ', ' + str(int(dico_decoration.index(decoration) + 1)) + ');\n')
                else:
                    sortie_decor.write("\t(" + str(i + 1) + ', ' + str(int(dico_decoration.index(decoration) + 1)) + '),\n')
        texte[i] = texte[i][texte[i].index("\t") + 1:]

        secteur = texte[i][:texte[i].index("\t")]
        dieu = "NULL"
        if secteur.count("-") != 0 or secteur.count(" ") == 0 :
            secteur = dico_secteur.get(secteur)
        else :
            dieu = int(dico_demidieu.index(secteur.split(" ")[-1]))+1
            secteur = "NULL"
        texte[i] = texte[i][texte[i].index("\t") + 1:]

        oo = int(texte[i][:texte[i].index("\t")])
        texte[i] = texte[i][texte[i].index("\t") + 1:]

        oa = int(texte[i][:texte[i].index("\t")])
        texte[i] = texte[i][texte[i].index("\t") + 1:]

        of = int(texte[i][:texte[i].index("\t")])
        texte[i] = texte[i][texte[i].index("\t") + 1:]

        if i == len(texte)-1 or (i+1)%repetition == 0:
            if of == 0 :
                if oa == 0 :
                    sortie_cout.write('\t(' + str(i+1) + ', "' + str("Obélos d'Or") + '", ' + str(oo) + '),\n')
                    sortie_cout.write('\t(' + str(i+1) + ', "' + str("Obélos d'Argent") + '", ' + str(oa) + ');\n')
                else :
                    sortie_cout.write('\t(' + str(i+1) + ', "' + str("Obélos d'Or") + '", ' + str(oo) + ');\n')
            else :
                sortie_cout.write('\t(' + str(i+1) + ', "' + str("Obélos d'Or") + '", ' + str(oo) + '),\n')
                sortie_cout.write('\t(' + str(i+1) + ', "' + str("Obélos d'Argent") + '", ' + str(oa) + '),\n')
                sortie_cout.write('\t(' + str(i+1) + ', "' + str("Obélos de Fer") + '", ' + str(of) + ');\n')
        else :
            if oo != 0:
                sortie_cout.write('\t(' + str(i+1) + ', "' + str("Obélos d'Or") + '", ' + str(oo) + '),\n')
            if oa != 0:
                sortie_cout.write('\t(' + str(i+1) + ', "' + str("Obélos d'Argent") + '", ' + str(oa) + '),\n')
            if of != 0:
                sortie_cout.write('\t(' + str(i+1) + ', "' + str("Obélos de Fer") + '", ' + str(of) + '),\n')
        quantite = int(texte[i])

        if i == len(texte) - 1 or (i+1)%repetition == 0 :
            sortie_commande.write("\t(" + str(jour) + ', ' + str(mois) + ', ' + str(annee) + ', ' + str(int(objet)+1) + ', ' + str(pouvoir) + ', ' + str(secteur) + ', ' + str(dieu) + ', ' + str(quantite) + ');\n')
        else :
            sortie_commande.write("\t(" + str(jour) + ', ' + str(mois) + ', ' + str(annee) + ', ' + str(int(objet)+1) + ', ' + str(pouvoir) + ', ' + str(secteur) + ', ' + str(dieu) + ', ' + str(quantite) + '),\n')
    sortie_commande.close()
    sortie_decor.close()
    sortie_cout.close()
    sortie_fabriquer.close()


def monnaie():
    texte = lecture("Monnaie")
    sortie = open("sortie/sortie-Monnaie.sql", "w")
    sortie.write("INSERT INTO `Convertir` (uniteMonnaie, conversionMonnaie) VALUES\n")
    for i in range(len(texte)):
        if i != len(texte)-1:
            sortie.write('\t("' + str(texte[i].split("\t")[0]) + '", ' + str(texte[i].split("\t")[1]) + '),\n')
        else :
            sortie.write('\t("' + str(texte[i].split("\t")[0]) + '", ' + str(texte[i].split("\t")[1]) + ');')

print("DIVINITÉ - ...", end="")
divinite()
print("OK\nMOIS - ...", end="")
mois()
print("OK\nMONNAIE - ...", end="")
monnaie()
print("OK\nPROVINCE/CITÉ/SECTEUR - ...", end="")
province()
print("OK\nARTISAN - ...", end="")
artisan()
print("OK\nOBJET - ...", end="")
objet()
print("OK\nGUERRE - ...", end="")
guerre()
print("OK\nDECORATION - ...", end="")
decoration()
print("OK\nPOUVOIR - ...", end="")
pouvoir()
print("OK\nCOMMANDES - ...", end="")
commande(None)
print("OK\nFUSION - ...", end="")

fichiers = ["Monnaie", "Province", "Cité", "Secteur", "Artisan", "Objet", "Divinité", "DemiDieu", "Guerre", "Décoration", "Pouvoir", "Mois", "Commande", "Coût", "Fabriquer", "Décorer"]
fichier = open("source/MPD.sql")
data = fichier.read()
fichier.close()

for i in range(len(fichiers)):
    fichier = open("sortie/sortie-"+str(fichiers[i])+".sql")
    data += "\n\n" + fichier.read()
    fichier.close()

fichier = open("IMPORT COMPLET.sql", "w")
fichier.write(data)
fichier.close()
print("OK")